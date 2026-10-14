const $ = id => document.getElementById(id);
const audio = $('audio');
const collection = interviews.filter(item => !item.demo && item.slug);
const views = ['listen', 'about'];
let selected = -1;
let view = 'listen';
let version = 0;
let failed = false;
let pendingSeek = null;
let renderedInterview = null;
let readerMode = 'story';

const translated = value => typeof value === 'string' ? value : value?.en || '';
const title = item => translated(item.source?.narrator?.display_name || item.narrator || item.name);
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

function chapterStart(chapter, item) {
  if (Number.isFinite(chapter.audioStart)) return chapter.audioStart;
  const matching = item.story?.find(part => part.clip?.file === chapter.clip?.file && Number.isFinite(part.audioStart));
  if (matching) return matching.audioStart;
  const clip = chapter.clip;
  const offset = item.sessionOffsets?.[Number(clip?.session) - 1];
  return Number.isFinite(offset) && clip?.start ? offset + timestamp(clip.start) : null;
}

function reading(item) {
  if (renderedInterview === item) return;
  renderedInterview = item;
  const content = $('story-content');
  const source = item.source || {};
  const photos = Array.isArray(item.photos) ? item.photos : source.photos || [];
  content.replaceChildren();
  if (source.subtitle || item.name) content.append(node('h2', source.subtitle || item.name, 'story-title'));
  if (source.bio?.length) paragraphs(content, source.bio);
  else if (item.description) paragraphs(content, item.description);
  appendPhotos(content, photos, item);

  const chapters = source.chapters?.length ? source.chapters : (item.story || []).filter(part => part.text && part.clip);
  chapters.forEach(chapter => {
    const section = node('section', undefined, 'story-chapter');
    const heading = node('div', undefined, 'chapter-heading');
    const seconds = chapterStart(chapter, item);
    heading.append(node('h3', chapter.title));
    if (Number.isFinite(seconds) && item.audio) {
      const button = node('button', time(seconds), 'chapter-time');
      button.type = 'button';
      button.setAttribute('aria-label', `Listen at ${time(seconds)}: ${translated(chapter.title)}`);
      button.onclick = () => seekTo(seconds);
      heading.append(button);
    }
    section.append(heading);
    paragraphs(section, chapter.body || chapter.text);
    content.append(section);
  });
  $('story-reader').scrollTop = 0;
  scriptReading(item);
  selectReader('story');
}

function recordingMeta(item) {
  const parent = $('recording-meta');
  const interviewer = item.source?.interviewer?.name || item.interviewer;
  parent.replaceChildren();
  if (interviewer) parent.append(node('p', `Interview by ${interviewer}`));
}

function scriptReading(item) {
  const content = $('script-content');
  content.replaceChildren();
  const sessions = item.transcript?.sessions || [];
  const available = sessions.some(session => session.segments?.length);
  document.querySelector('.reader-tabs').hidden = !available;
  if (!available) return;
  content.append(node('h2', item.source?.subtitle || item.name, 'story-title'));
  sessions.forEach((session, sessionIndex) => {
    const offset = item.sessionOffsets?.[sessionIndex];
    (session.segments || []).forEach(segment => {
      const passage = node('section', undefined, 'script-passage');
      const heading = node('div', undefined, 'script-heading');
      const seconds = Number.isFinite(offset) ? offset + timestamp(segment.t) : null;
      heading.append(node('span', segment.speaker, 'script-speaker'));
      if (Number.isFinite(seconds) && item.audio) {
        const button = node('button', time(seconds), 'chapter-time');
        button.type = 'button';
        button.dataset.start = seconds;
        button.setAttribute('aria-label', `Listen at ${time(seconds)}: ${segment.speaker}`);
        button.onclick = () => seekTo(seconds);
        heading.append(button);
      }
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
  readerMode = mode;
  ['story', 'script'].forEach(name => {
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
  const attempt = version;
  try {
    // Keep failure visible until the retry actually plays successfully.
    if (failed) audio.load();
    await audio.play();
    if (attempt === version) {
      failed = false;
      controls();
    }
  } catch (error) {
    if (attempt === version && error.name !== 'AbortError') {
      failed = true;
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
    audio.pause();
    audio.removeAttribute('src');
    selected = index;
    failed = false;
    pendingSeek = null;
    if (collection[selected].audio) audio.src = collection[selected].audio;
    audio.load();
  }
  view = next.view ?? view;
  render();
  if (mode) writeLocation(mode);
  if (changed && wasPlaying && collection[selected].audio) play();
}

function controls() {
  if (selected < 0) return;
  const item = collection[selected];
  const available = !!item.audio;
  const playing = !audio.paused && !audio.ended;
  const duration = Number.isFinite(audio.duration) ? audio.duration : 0;
  const label = failed ? 'Try again' : playing ? 'Pause' : 'Play';
  $('transport-title').textContent = title(item);
  $('play').disabled = !available;
  $('play-label').textContent = label;
  $('play').setAttribute('aria-label', `${label}: ${title(item)}`);
  $('play-icon').setAttribute('d', playing ? 'M6 4H10V20H6ZM14 4H18V20H14Z' : 'M7 4 21 12 7 20Z');
  $('audio-status').textContent = !available ? 'Audio to come.' : failed ? 'Recording unavailable. Try again.' : '';
  $('audio-status').hidden = available && !failed;
  $('transport').classList.toggle('has-error', failed);
  $('transport').hidden = view !== 'listen' && !audio.getAttribute('src');
  $('seek').disabled = !duration;
  $('seek').max = duration;
  $('seek').value = audio.currentTime || 0;
  $('seek').style.setProperty('--progress', `${duration ? audio.currentTime / duration * 100 : 0}%`);
  $('elapsed').textContent = time(audio.currentTime);
  $('duration').textContent = time(duration || item.durationSeconds);
  $('next-interview').hidden = selected >= collection.length - 1;
}

function render() {
  const item = collection[selected];
  const radio = radioCatalog[item.radio];
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
  if (radio) {
    const image = $('selected-radio');
    image.src = 'assets/' + radio.file;
    image.width = radio.width;
    image.height = radio.height;
    image.alt = `Radio for ${title(item)}`;
  }
  reading(item);
  about();
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

['story', 'script'].forEach(mode => {
  const tab = $(mode + '-tab');
  tab.onclick = () => selectReader(mode);
  tab.onkeydown = event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 'story' : event.key === 'End' ? 'script'
      : readerMode === 'story' ? 'script' : 'story';
    selectReader(next, true);
  };
});

$('next-interview').onclick = () => nextInterview();
$('transport-title').onclick = () => navigate({ view: 'listen' });
$('play').onclick = () => failed || audio.paused ? play() : audio.pause();
$('seek').oninput = () => {
  if (Number.isFinite(audio.duration)) audio.currentTime = Number($('seek').value);
};

audio.addEventListener('loadedmetadata', () => {
  if (pendingSeek !== null) {
    audio.currentTime = Math.min(pendingSeek, Number.isFinite(audio.duration) ? audio.duration : pendingSeek);
    pendingSeek = null;
  }
});
audio.addEventListener('playing', () => {
  failed = false;
  controls();
});
audio.addEventListener('ended', () => {
  if (audio.ended && !failed && audio.getAttribute('src')) nextInterview(true);
});
['play', 'pause', 'ended', 'timeupdate', 'loadedmetadata', 'durationchange', 'emptied']
  .forEach(event => audio.addEventListener(event, controls));
audio.addEventListener('error', () => {
  if (audio.getAttribute('src')) {
    failed = true;
    controls();
  }
});
window.addEventListener('popstate', () => navigate(route(), null));
if (collection.length) navigate(route(), null);
