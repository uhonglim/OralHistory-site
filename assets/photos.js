// Supplied photographs and explicitly reserved places for future photographs.
// Source story/transcript JSON stays unchanged; null source photos are not images.
const interviewPhotos = {
  'wang-grandfather': [
    { placeholder: true, size: 'large' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' }
  ]
};
interviews.forEach(item => {
  item.photos = interviewPhotos[item.slug] || [];
});
