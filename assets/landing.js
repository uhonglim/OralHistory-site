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
const collection = document.createElement('div');
collection.className = 'radio-collection';
wall.append(collection);

// One object per interview, with its story title and narrator underneath.
wallSlots.forEach(({ radio: design, interview }, index) => {
  const artwork = interview.object || radioCatalog[design];
  const object = document.createElement('a');
  object.className = 'wall-radio';
  object.dataset.radio = design;
  object.href = 'listen.html?interview=' + encodeURIComponent(interviewSlug(interview));

  const frame = document.createElement('span');
  frame.className = 'wall-object';
  const image = document.createElement('img');
  const optimized = typeof webArtwork === 'undefined' ? null : webArtwork[artwork.file];
  image.src = 'assets/' + (optimized?.thumbnail || artwork.file);
  image.width = artwork.width;
  image.height = artwork.height;
  image.alt = interview.object ? artwork.alt : '';
  image.decoding = 'async';
  image.loading = index < 6 ? 'eager' : 'lazy';
  frame.append(image);

  object.append(
    frame,
    textElement('span', 'wall-title', interviewStoryTitle(interview)),
    textElement('span', 'wall-radio-name', narratorName(interview))
  );
  collection.append(object);
});

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
