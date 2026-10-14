// Supplied photographs and explicitly reserved places for future photographs.
// Source story/transcript JSON stays unchanged; null source photos are not images.
const photoRequirements = { count: 10, captionWords: 20 };
const interviewPhotos = {
  'wang-grandfather': [
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' },
    { placeholder: true, size: 'small' }
  ]
};
interviews.forEach(item => {
  item.photos = interviewPhotos[item.slug] || Array.from(
    { length: photoRequirements.count }, () => ({ placeholder: true, size: 'small' })
  );
});
