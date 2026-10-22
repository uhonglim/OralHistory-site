const $ = id => document.getElementById(id);
const audio = $('audio');
const collection = interviews.filter(item => !item.demo && item.slug);
const views = ['listen', 'about'];
const readerModes = ['story', 'quotes', 'script'];
let selected = -1;
let view = 'listen';
let version = 0;
let failed = false;
let pendingSeek = null;
let renderedInterview = null;
let readerMode = 'story';
let renderedScript = null;
let scrubbing = false;
let buffering = false;
let playAttempt = 0;

const translated = value => typeof value === 'string' ? value : value?.en || '';
const title = item => translated(item.narrator || item.source?.narrator?.display_name || item.name);
const time = value => `${Math.floor((value || 0) / 60)}:${String(Math.floor((value || 0) % 60)).padStart(2, '0')}`;
const timestamp = value => String(value || '0').split(':').reduce((total, part) => total * 60 + Number(part), 0);

function node(tag, text, className) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = translated(text);
  if (className) element.className = className;
  return element;
}

// Preserve emphasis without allowing source text to become executable HTML.
function sourceText(element, value) {
  const parsed = new DOMParser().parseFromString(translated(value), 'text/html');
  function append(parent, child) {
    if (child.nodeType === Node.TEXT_NODE) {
      parent.append(document.createTextNode(child.textContent));
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return;
    const allowed = ['I', 'EM', 'STRONG', 'BR'].includes(child.tagName);
    const next = allowed ? document.createElement(child.tagName.toLowerCase()) : parent;
    if (allowed) parent.append(next);
    child.childNodes.forEach(part => append(next, part));
  }
  parsed.body.childNodes.forEach(child => append(element, child));
  return element;
}

function paragraphs(parent, value) {
  const items = Array.isArray(value) ? value : translated(value).split(/\n\s*\n/);
  items.filter(Boolean).forEach(text => parent.append(sourceText(node('p'), text)));
}

function photoPath(file, item) {
  if (typeof file !== 'string' || !file.trim()) return null;
  let clean;
  try { clean = decodeURIComponent(file.trim()); } catch { return null; }
  if (/[\\%?#]/.test(clean) || /^[a-z][a-z0-9+.-]*:/i.test(clean)) return null;
  const base = `assets/interviews/${item.slug}/`;
  const local = clean.startsWith('/' + base) ? clean.slice(1) : clean;
  const inInterview = local.startsWith(base);
  const relative = inInterview ? local.slice(base.length) : local;
  if (!inInterview && !relative.startsWith('photos/')) return null;
  if (relative.split('/').some(part => !part || part === '.' || part === '..')) return null;
  return base + relative;
}

function photoFigure(photo, item, index) {
  const file = photoPath(photo.file, item);
  if (!file && photo.placeholder !== true) return null;
  const figure = node('figure', undefined, 'wall-photo');
  if (photo.size !== 'small') figure.classList.add('wall-photo--wide');
  if (!file) {
    const placeholder = node('div', `Photo ${String(index + 1).padStart(2, '0')}`, 'photo-placeholder');
    placeholder.setAttribute('role', 'img');
    placeholder.setAttribute('aria-label', `Reserved place for photograph ${index + 1}`);
    figure.append(placeholder);
    figure.append(node('figcaption', `${photoRequirements.captionWords}-word English caption`, 'photo-caption-placeholder'));
    return figure;
  }
  const image = node('img');
  image.src = file;
  image.alt = translated(photo.alt || photo.caption);
  image.loading = 'lazy';
  image.decoding = 'async';
  if (Number.isFinite(photo.width) && Number.isFinite(photo.height)) {
    image.width = photo.width;
    image.height = photo.height;
  }
  figure.append(image);
  if (photo.caption) figure.append(sourceText(node('figcaption'), photo.caption));
  return figure;
}

function appendPhotos(parent, photos, item) {
  const entries = photos.filter(photo => photo.placeholder === true || photoPath(photo.file, item));
  if (!entries.length) return;
  const wall = node('div', undefined, 'photo-wall');
  entries.forEach((photo, index) => wall.append(photoFigure(photo, item, index)));
  parent.append(wall);
}

function recordingSeconds(item, sessionId, stamp) {
  const sessionIndex = (item.transcript?.sessions || []).findIndex(session => String(session.id) === String(sessionId));
  const offset = item.sessionOffsets?.[sessionIndex];
  const seconds = timestamp(stamp);
  return Number.isFinite(offset) && Number.isFinite(seconds) ? offset + seconds : null;
}

function listenButton(item, seconds, label) {
  if (!Number.isFinite(seconds) || !item.audio) return null;
  const button = node('button', time(seconds), 'chapter-time');
  button.type = 'button';
  button.dataset.start = seconds;
  button.setAttribute('aria-label', `Listen at ${time(seconds)}${label ? `: ${label}` : ''}`);
  button.onclick = () => seekTo(seconds);
  return button;
}

function appendQuotes(parent, quotes, item) {
  if (!quotes?.length) return;
  const collection = node('div', undefined, 'story-quotes');
  collection.append(node('p', 'Translated and edited for clarity.', 'quotes-note'));
  quotes.forEach(quote => {
    const figure = node('figure', undefined, 'story-quote');
    const blockquote = node('blockquote');
    const text = node('p', quote.en);
    text.lang = 'en';
    blockquote.append(text);
    figure.append(blockquote);
    const reference = quote.session_id != null && quote.t != null ? quote : quote.source_refs?.[0];
    const seconds = reference ? recordingSeconds(item, reference.session_id, reference.t) : null;
    const button = listenButton(item, seconds, quote.en);
    if (button) {
      const caption = node('figcaption');
      caption.append(button);
      figure.append(caption);
    }
    collection.append(figure);
  });
  parent.append(collection);
}

function reading(item) {
  if (renderedInterview === item) return;
  renderedInterview = item;
  renderedScript = null;
  $('script-content').replaceChildren();
  const content = $('story-content');
  const source = item.source || {};
  const story = item.readingEdition?.story;
  const photos = Array.isArray(item.photos) ? item.photos : source.photos || [];
  content.replaceChildren();
  if (story?.title || source.subtitle || item.name) content.append(node('h2', story?.title || source.subtitle || item.name, 'story-title'));
  if (story) {
    paragraphs(content, story.paragraphs || []);
  } else {
    if (source.bio?.length) paragraphs(content, source.bio);
    else if (item.description) paragraphs(content, item.description);
    appendPhotos(content, photos, item);
  }

  $('story-reader').scrollTop = 0;
  const quotesContent = $('quotes-content');
  quotesContent.replaceChildren();
  appendQuotes(quotesContent, story?.quotes, item);
  $('quotes-reader').scrollTop = 0;
  selectReader('story');
}

function recordingMeta(item) {
  const parent = $('recording-meta');
  const interviewer = item.interviewer || item.source?.interviewer?.name;
  parent.replaceChildren();
  if (interviewer) parent.append(node('p', `Interview by ${interviewer}`));
}

function scriptReading(item) {
  const content = $('script-content');
  content.replaceChildren();
  const transcript = item.readingEdition?.transcript || item.transcript;
  const sessions = transcript?.sessions || [];
  const available = sessions.some(session => session.segments?.length);
  if (!available) return;
  content.append(node('h2', item.readingEdition?.story?.title || item.source?.subtitle || item.name, 'story-title'));
  const note = transcript?.note || item.transcriptNote;
  if (note) content.append(node('p', note, 'script-note'));
  sessions.forEach(session => {
    (session.segments || []).forEach(segment => {
      const passage = node('section', undefined, 'script-passage');
      const heading = node('div', undefined, 'script-heading');
      const seconds = recordingSeconds(item, session.id, segment.t);
      const speaker = segment.speaker === item.source?.interviewer?.name
        ? item.interviewer || segment.speaker : segment.speaker;
      heading.append(node('span', speaker, 'script-speaker'));
      const button = listenButton(item, seconds, speaker);
      if (button) heading.append(button);
      passage.append(heading);
      if (segment.en) {
        const translation = node('p', segment.en, 'script-translation');
        translation.lang = 'en';
        passage.append(translation);
      }
      if (segment.zh) {
        const original = node('p', segment.zh, 'script-original');
        original.lang = 'zh-Hans';
        passage.append(original);
      }
      content.append(passage);
    });
  });
  $('script-reader').scrollTop = 0;
}

function selectReader(mode, focus = false) {
  if (mode === 'script' && renderedScript !== collection[selected]) {
    scriptReading(collection[selected]);
    renderedScript = collection[selected];
  }
  readerMode = mode;
  readerModes.forEach(name => {
    const active = name === mode;
    const tab = $(name + '-tab');
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    $(name + '-reader').hidden = !active;
  });
  if (focus) $(mode + '-tab').focus();
}

function about() {
  const parent = $('about-credits');
  parent.replaceChildren();
  if (typeof contributors === 'undefined') return;
  contributors.forEach(person => {
    const paragraph = node('p', undefined, 'about-credit');
    paragraph.append(node('span', person.name), node('span', person.role, 'credit-role'));
    parent.append(paragraph);
  });
}

function route() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('interview');
  const index = slug
    ? collection.findIndex(item => item.slug === slug)
    : collection.findIndex(item => item.radio === params.get('radio'));
  return {
    index: Math.max(0, index),
    view: params.get('view') === 'about' || location.hash === '#about' ? 'about' : 'listen'
  };
}

function locationFor(nextView) {
  const params = new URLSearchParams({ interview: collection[selected].slug });
  if (nextView !== 'listen') params.set('view', nextView);
  return `listen.html?${params}`;
}

function writeLocation(mode = 'push') {
  history[mode === 'replace' ? 'replaceState' : 'pushState']({}, '', locationFor(view));
}

async function play() {
  const interviewVersion = version;
  const attempt = ++playAttempt;
  try {
    const item = collection[selected];
    if (!audio.getAttribute('src')) {
      const stream = streamingSource(item);
      audio.src = stream && audio.canPlayType(stream.type) ? stream.file : item.audio;
    }
    audio.preload = 'auto';
    buffering = true;
    // Keep failure visible until the retry actually plays successfully.
    if (failed) audio.load();
    controls();
    await audio.play();
    if (attempt === playAttempt && interviewVersion === version) {
      failed = false;
      buffering = false;
      controls();
    }
  } catch (error) {
    if (attempt === playAttempt && interviewVersion === version && error.name !== 'AbortError') {
      failed = true;
      buffering = false;
      controls();
    }
  }
}

function seekTo(seconds) {
  if (!collection[selected].audio || !Number.isFinite(seconds)) return;
  pendingSeek = Math.max(0, seconds);
  if (!failed && audio.readyState >= 1) {
    audio.currentTime = Math.min(pendingSeek, Number.isFinite(audio.duration) ? audio.duration : pendingSeek);
    pendingSeek = null;
  }
  play();
}

function navigate(next, mode = 'push') {
  const index = next.index ?? selected;
  if (!collection[index]) return;
  const wasPlaying = !audio.paused && !audio.ended;
  const changed = index !== selected;
  if (changed) {
    version++;
    playAttempt++;
    audio.pause();
    audio.removeAttribute('src');
    selected = index;
    failed = false;
    pendingSeek = null;
    scrubbing = false;
    buffering = false;
    audio.preload = 'none';
    audio.load();
  }
  view = next.view ?? view;
  render();
  if (mode) writeLocation(mode);
  if (changed && wasPlaying && collection[selected].audio) play();
}

function streamingSource(item) {
  return typeof webAudioSources === 'undefined' ? null : webAudioSources[item.audio];
}

function recordingDuration() {
  if (Number.isFinite(audio.duration)) return audio.duration;
  const item = collection[selected];
  return streamingSource(item)?.durationSeconds || item.durationSeconds || 0;
}

function progress() {
  if (selected < 0 || scrubbing) return;
  const duration = recordingDuration();
  const position = pendingSeek ?? audio.currentTime ?? 0;
  $('seek').disabled = !duration;
  $('seek').max = duration;
  $('seek').value = position;
  $('seek').style.setProperty('--progress', `${duration ? position / duration * 100 : 0}%`);
  $('elapsed').textContent = time(position);
  $('duration').textContent = time(duration);
}

function controls() {
  if (selected < 0) return;
  const item = collection[selected];
  const available = !!item.audio;
  const playing = !audio.paused && !audio.ended;
  const label = failed ? 'Try again' : playing ? 'Pause' : 'Play';
  $('transport-title').textContent = title(item);
  $('play').disabled = !available;
  $('play-label').textContent = label;
  $('play').setAttribute('aria-label', `${label}: ${title(item)}`);
  $('play-icon').setAttribute('d', playing ? 'M6 4H10V20H6ZM14 4H18V20H14Z' : 'M7 4 21 12 7 20Z');
  $('audio-status').textContent = !available ? 'Audio to come.' : failed ? 'Recording unavailable. Try again.' : buffering ? 'Loading audio…' : '';
  $('audio-status').hidden = available && !failed && !buffering;
  $('transport').classList.toggle('has-error', failed);
  $('transport').hidden = view !== 'listen' && !audio.getAttribute('src');
  progress();
}

function render() {
  const item = collection[selected];
  const artwork = item.object || radioCatalog[item.radio];
  document.title = `${view === 'about' ? 'About' : 'Listen'} — Southern Voices`;
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.removeAttribute('aria-current');
    if (link.dataset.nav === view) link.setAttribute('aria-current', 'page');
    if (link.dataset.nav !== 'home') link.href = locationFor(link.dataset.nav);
  });
  views.forEach(name => $(name + '-view').hidden = name !== view);
  document.body.classList.toggle('about-open', view === 'about');
  $('recording-title').textContent = title(item);
  recordingMeta(item);
  document.querySelectorAll('[data-interview-direction]').forEach(button => {
    const direction = Number(button.dataset.interviewDirection);
    const next = (selected + direction + collection.length) % collection.length;
    button.hidden = collection.length < 2;
    button.setAttribute('aria-label', `${direction < 0 ? 'Previous' : 'Next'} interview: ${title(collection[next])}`);
  });
  if (artwork && view === 'listen') {
    const image = $('selected-radio');
    const optimized = typeof webArtwork === 'undefined' ? null : webArtwork[artwork.file];
    const path = 'assets/' + (optimized?.display || artwork.file);
    if (image.getAttribute('src') !== path) image.src = path;
    image.decoding = 'async';
    image.width = artwork.width;
    image.height = artwork.height;
    image.alt = artwork.alt || `Radio for ${title(item)}`;
    image.classList.toggle('interview-object', Boolean(item.object));
  }
  if (view === 'listen') reading(item);
  else about();
  $(view === 'listen' ? 'session-player' : 'continuing-player').append($('transport'));
  controls();
}

document.querySelectorAll('[data-nav]').forEach(link => {
  if (link.dataset.nav === 'home') return;
  link.onclick = event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate({ view: link.dataset.nav });
  };
});

function nextInterview(autoplay = false) {
  if (selected >= collection.length - 1) return;
  const index = selected + 1;
  navigate({ index }, autoplay ? 'replace' : 'push');
  if (autoplay && collection[index].audio) play();
}

readerModes.forEach(mode => {
  const tab = $(mode + '-tab');
  tab.onclick = () => selectReader(mode);
  tab.onkeydown = event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowLeft' ? -1 : 1;
    const index = (readerModes.indexOf(readerMode) + direction + readerModes.length) % readerModes.length;
    const next = event.key === 'Home' ? readerModes[0] : event.key === 'End' ? readerModes.at(-1)
      : readerModes[index];
    selectReader(next, true);
  };
});

// Manual arrows wrap through the collection; automatic playback still stops at the last interview.
document.querySelectorAll('[data-interview-direction]').forEach(button => {
  button.onclick = () => {
    if (collection.length < 2) return;
    const index = (selected + Number(button.dataset.interviewDirection) + collection.length) % collection.length;
    navigate({ index });
  };
});
$('transport-title').onclick = () => navigate({ view: 'listen' });
$('play').onclick = () => {
  if (failed || audio.paused) play();
  else {
    buffering = false;
    audio.pause();
  }
};
$('seek').oninput = () => {
  scrubbing = true;
  const position = Number($('seek').value);
  const duration = recordingDuration();
  $('elapsed').textContent = time(position);
  $('seek').style.setProperty('--progress', `${duration ? position / duration * 100 : 0}%`);
};
$('seek').onchange = () => {
  const position = Number($('seek').value);
  scrubbing = false;
  if (audio.readyState >= 1 && !failed) audio.currentTime = position;
  else pendingSeek = position;
  progress();
};
$('seek').onpointercancel = () => { scrubbing = false; progress(); };
$('seek').onblur = () => { if (scrubbing) $('seek').onchange(); };

audio.addEventListener('loadedmetadata', () => {
  if (pendingSeek !== null) {
    audio.currentTime = Math.min(pendingSeek, Number.isFinite(audio.duration) ? audio.duration : pendingSeek);
    pendingSeek = null;
  }
});
audio.addEventListener('playing', () => {
  failed = false;
  buffering = false;
  controls();
});
audio.addEventListener('waiting', () => {
  buffering = !audio.paused;
  controls();
});
audio.addEventListener('ended', () => {
  if (audio.ended && !failed && audio.getAttribute('src')) nextInterview(true);
});
audio.addEventListener('timeupdate', progress);
['play', 'pause', 'ended', 'loadedmetadata', 'durationchange', 'emptied']
  .forEach(event => audio.addEventListener(event, controls));
audio.addEventListener('error', () => {
  if (audio.getAttribute('src')) {
    const item = collection[selected];
    if (audio.getAttribute('src') !== item.audio) {
      playAttempt++;
      const resume = buffering || !audio.paused;
      pendingSeek = pendingSeek ?? audio.currentTime;
      audio.src = item.audio;
      audio.load();
      if (resume) play();
      return;
    }
    failed = true;
    buffering = false;
    controls();
  }
});
window.addEventListener('popstate', () => navigate(route(), null));
if (collection.length) navigate(route(), null);
