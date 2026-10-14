// Only photographs supplied for the interview belong here.
// Source story/transcript JSON stays unchanged; null source photos are not images.
const interviewPhotos = {
  'wang-grandfather': []
};
interviews.forEach(item => {
  item.photos = interviewPhotos[item.slug] || [];
});
