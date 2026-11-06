// Only show objects with an interview; do not fill the collection with placeholders.
const interviewSlug = item => item.slug || item.source?.slug || item.id;
const narratorName = item => item.narrator?.display_name || (typeof item.narrator === 'string' ? item.narrator : '') || item.source?.narrator?.display_name || item.name;
const wallSlots = interviews.filter(item => !item.demo && interviewSlug(item)).map(interview => ({
  radio: Object.hasOwn(radioCatalog, interview.radio) ? interview.radio : 'mainland',
  interview
}));

function textElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

const wall = document.getElementById('radios');
const collection = document.createElement('ol');
collection.className = 'radio-collection';
wall.append(collection);

wallSlots.forEach(({ radio: design, interview }, index) => {
  const artwork = interview.object || radioCatalog[design];
  const slug = interviewSlug(interview);
  const name = narratorName(interview);
  const title = interviewStoryTitle(interview);
  const item = document.createElement('li');
  item.className = 'wall-item';

  const object = document.createElement('a');
  object.className = 'wall-radio wall-radio--available';
  object.dataset.radio = design;
  object.dataset.slot = index;
  object.href = 'listen.html?interview=' + encodeURIComponent(slug);

  const figure = document.createElement('span');
  figure.className = 'wall-object';
  const image = document.createElement('img');
  const optimized = typeof webArtwork === 'undefined' ? null : webArtwork[artwork.file];
  image.src = 'assets/' + (optimized?.thumbnail || artwork.file);
  image.width = artwork.width;
  image.height = artwork.height;
  image.alt = interview.object ? artwork.alt : '';
  image.decoding = 'async';
  image.loading = index < 6 ? 'eager' : 'lazy';
  figure.append(image);

  const label = document.createElement('span');
  label.className = 'wall-label';
  const top = document.createElement('span');
  top.className = 'wall-label-top';
  top.append(textElement('span', 'wall-number', String(index + 1).padStart(2, '0')));
  const place = typeof interviewPlaces === 'undefined' ? '' : interviewPlaces[slug] || '';
  if (place) top.append(textElement('span', 'wall-place', place));
  label.append(top);
  label.append(textElement('span', 'wall-title', title));
  label.append(textElement('span', 'wall-radio-name', name));
  const details = [interviewLanguage(interview), minutesLabel(interviewSeconds(interview))].filter(Boolean).join(' · ');
  if (details) label.append(textElement('span', 'wall-details', details));

  object.append(figure, label);
  item.append(object);
  collection.append(item);
});

// A loose arrangement of the same objects beside the introduction. Mouse users
// can open a story from here; keyboard and screen-reader users get the labelled list.
const cluster = document.getElementById('intro-objects');
wallSlots.slice(0, 9).forEach(({ radio: design, interview }, index) => {
  const artwork = interview.object || radioCatalog[design];
  const optimized = typeof webArtwork === 'undefined' ? null : webArtwork[artwork.file];
  const link = document.createElement('a');
  link.className = 'float-object';
  link.href = 'listen.html?interview=' + encodeURIComponent(interviewSlug(interview));
  link.tabIndex = -1;
  link.style.setProperty('--i', index);
  link.title = `${interviewStoryTitle(interview)} · ${narratorName(interview)}`;
  const image = document.createElement('img');
  image.src = 'assets/' + (optimized?.thumbnail || artwork.file);
  image.alt = '';
  image.decoding = 'async';
  link.append(image);
  cluster.append(link);
});

renderStats(document.getElementById('collection-stats'));

const lead = projectLead();
if (lead) {
  const credit = document.getElementById('intro-credit');
  credit.textContent = '';
  credit.append(document.createTextNode('Project lead and website editor: '));
  credit.append(textElement('strong', '', lead.name));
  credit.hidden = false;
}

const first = wallSlots[0]?.interview;
if (first) document.getElementById('start-listening').href = 'listen.html?interview=' + encodeURIComponent(interviewSlug(first));

// Preserve existing bookmarked interview entry points.
const requested = new URLSearchParams(location.search);
const requestedInterview = requested.get('interview');
const requestedRadio = requested.get('radio');
const entryInterview = requestedInterview
  ? interviews.find(item => interviewSlug(item) === requestedInterview)
  : requestedRadio ? interviews.find(item => item.radio === requestedRadio) : null;
if (entryInterview) {
  location.replace('listen.html?interview=' + encodeURIComponent(interviewSlug(entryInterview)));
}
