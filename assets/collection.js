// Display helpers shared by Home, Listen and About. Loaded after the interview
// data files; everything here is derived from them except the short place line.

// Where each story moves, in the words of its short description. These are
// display labels only and do not add facts beyond the interview summaries.
const interviewPlaces = {
  'wang-grandfather': 'Anhai → Xiamen',
  'yufeng-great-uncle': 'Jinjiang → Xiamen',
  'leanna-grandparent': 'Macau',
  'yuhan-grandmother': 'Xiaogan → Mianyang',
  'yuhan-aunt-mandarin': 'Chuxiong → Shenzhen',
  'yuhan-uncle': 'Xiaogan → Mianyang',
  'yuhan-younger-aunt': 'Shandong → Mianyang',
  'yuhan-aunt-yunnan': 'Chuxiong → Macau',
  'yhsam-father': 'Macau'
};

const collectionItems = () => interviews.filter(item => !item.demo && (item.slug || item.source?.slug));

function interviewSeconds(item) {
  const stream = typeof webAudioSources === 'undefined' ? null : webAudioSources[item.audio];
  return stream?.durationSeconds || item.durationSeconds || 0;
}

function interviewLanguage(item) {
  return item.language || item.source?.interview?.language || '';
}

function interviewStoryTitle(item) {
  return item.readingEdition?.story?.title || item.source?.subtitle || item.name || '';
}

function minutesLabel(seconds) {
  return seconds ? `${Math.max(1, Math.round(seconds / 60))} min` : '';
}

function collectionStats() {
  const items = collectionItems();
  const seconds = items.reduce((total, item) => total + interviewSeconds(item), 0);
  const languages = new Set();
  items.forEach(item => interviewLanguage(item)
    .split(/\s+and\s+|,\s*|\s*\/\s*/)
    .map(name => name.trim().toLowerCase())
    .filter(Boolean)
    .forEach(name => languages.add(name)));
  const interviewers = new Set(items.map(item => item.interviewer || item.source?.interviewer?.name).filter(Boolean));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.round((seconds % 3600) / 60);
  return [
    { value: String(items.length), label: items.length === 1 ? 'interview' : 'interviews' },
    { value: hours ? `${hours} h ${String(minutes).padStart(2, '0')}` : `${minutes} min`, label: 'of recorded audio' },
    { value: String(languages.size), label: 'languages and dialects' },
    { value: String(interviewers.size), label: interviewers.size === 1 ? 'interviewer' : 'interviewers' }
  ];
}

function renderStats(parent) {
  if (!parent) return;
  parent.replaceChildren();
  collectionStats().forEach(stat => {
    const row = document.createElement('div');
    row.className = 'stat';
    const value = document.createElement('dd');
    value.textContent = stat.value;
    const label = document.createElement('dt');
    label.textContent = stat.label;
    row.append(label, value);
    parent.append(row);
  });
}

function projectLead() {
  if (typeof contributors === 'undefined') return null;
  return contributors.find(person => /project lead/i.test(person.role || '')) || null;
}
