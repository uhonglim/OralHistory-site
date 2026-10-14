// One object is one narrator's complete interview. Unassigned artwork is
// decorative until real interview content is supplied.
const wallDesigns = ['nanyang', 'hongkong', 'mainland', 'taiwan', 'usa', 'uk', 'canada', 'australia', 'france', 'japan'];
const wallSlots = wallDesigns.map(radio => ({ radio, interview: null }));
const interviewSlug = item => item.slug || item.source?.slug || item.id;
const narratorName = item => item.narrator?.display_name || item.source?.narrator?.display_name || (typeof item.narrator === 'string' ? item.narrator : item.name);

interviews.forEach(item => {
  if (!interviewSlug(item)) return;
  const design = Object.hasOwn(radioCatalog, item.radio) ? item.radio : 'mainland';
  const slot = wallSlots.find(candidate => !candidate.interview && candidate.radio === design)
    || wallSlots.find(candidate => !candidate.interview);
  if (slot) {
    slot.radio = design;
    slot.interview = item;
  } else {
    wallSlots.push({ radio: design, interview: item });
  }
});

const wall = document.getElementById('radios');
const collection = document.createElement('div');
collection.className = 'radio-collection';
wall.append(collection);

wallSlots.forEach(({ radio: design, interview }, index) => {
  const artwork = radioCatalog[design];
  const object = document.createElement(interview ? 'a' : 'div');
  object.className = 'wall-radio' + (interview ? ' wall-radio--available' : ' wall-radio--unassigned');
  object.dataset.radio = design;
  object.dataset.slot = index;
  if (interview) {
    const name = narratorName(interview);
    object.href = 'listen.html?interview=' + encodeURIComponent(interviewSlug(interview));
    object.setAttribute('aria-label', 'Listen to ' + name);
    const label = document.createElement('span');
    label.className = 'wall-radio-name';
    label.textContent = name;
    object.append(label);
  } else {
    object.setAttribute('aria-hidden', 'true');
  }
  const image = document.createElement('img');
  image.src = 'assets/' + artwork.file;
  image.width = artwork.width;
  image.height = artwork.height;
  image.alt = '';
  image.decoding = 'async';
  object.append(image);
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
