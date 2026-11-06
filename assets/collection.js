// Small display helpers shared by Home and Listen, derived from the interview data.

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
