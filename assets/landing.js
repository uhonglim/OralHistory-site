// One object is one narrator's complete interview. Unassigned artwork is
// decorative until real interview content is supplied.
const wallDesigns = ['nanyang', 'hongkong', 'mainland', 'taiwan', 'usa', 'uk', 'canada', 'australia', 'france', 'japan'];
const interviewSlug = item => item.slug || item.source?.slug || item.id;
const narratorName = item => item.narrator?.display_name || (typeof item.narrator === 'string' ? item.narrator : '') || item.source?.narrator?.display_name || item.name;
const wallSlots = interviews.filter(item => !item.demo && interviewSlug(item)).map(interview => ({
  radio: Object.hasOwn(radioCatalog, interview.radio) ? interview.radio : 'mainland',
  interview
}));
const assignedDesigns = new Set(wallSlots.map(slot => slot.radio));
for (const radio of wallDesigns) {
  if (wallSlots.length >= wallDesigns.length) break;
  if (!assignedDesigns.has(radio)) wallSlots.push({ radio, interview: null });
}

const wall = document.getElementById('radios');
const collection = document.createElement('div');
collection.className = 'radio-collection';
wall.append(collection);

wallSlots.forEach(({ radio: design, interview }, index) => {
  const artwork = interview?.object || radioCatalog[design];
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
  image.alt = interview?.object ? artwork.alt : '';
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
