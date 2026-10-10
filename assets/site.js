(() => {
  const search = document.querySelector('#search');
  const cards = [...document.querySelectorAll('[data-story]')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const filters = {};
  function filterStories() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    cards.forEach(card => {
      const matches = card.dataset.search.toLocaleLowerCase().includes(query)
        && Object.entries(filters).every(([key, value]) => !value || JSON.parse(card.dataset[key]).includes(value));
      card.hidden = !matches;
      if (matches) count++;
    });
    document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'interview' : 'interviews'}`;
    document.querySelector('#empty').hidden = count > 0;
  }
  if (search) {
    search.addEventListener('input', filterStories);
    buttons.forEach(button => button.addEventListener('click', () => {
      const key = button.dataset.filter;
      filters[key] = filters[key] === button.dataset.value ? null : button.dataset.value;
      buttons.filter(b => b.dataset.filter === key).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.value === filters[key])));
      filterStories();
    }));
    document.querySelector('#clear').addEventListener('click', () => {
      search.value = '';
      Object.keys(filters).forEach(key => delete filters[key]);
      buttons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      filterStories();
    });
  }
  const transcriptSearch = document.querySelector('#transcript-search');
  transcriptSearch?.addEventListener('input', () => {
    const query = transcriptSearch.value.trim().toLocaleLowerCase();
    let count = 0;
    document.querySelectorAll('[data-segment]').forEach(segment => {
      segment.hidden = !segment.textContent.toLocaleLowerCase().includes(query);
      if (!segment.hidden) count++;
    });
    document.querySelectorAll('.transcript-part').forEach(part => {
      part.hidden = ![...part.querySelectorAll('[data-segment]')].some(row => !row.hidden);
    });
    document.querySelector('#transcript-count').textContent = query ? `${count} matching ${count === 1 ? 'passage' : 'passages'}` : '';
  });
  const players = [...document.querySelectorAll('audio')];
  const interviewPlayer = document.querySelector('#interview-player');
  const tracks = [...document.querySelectorAll('[data-clip]')];
  let playbackRequest = 0;
  tracks.forEach(track => track.addEventListener('click', async () => {
    const request = ++playbackRequest;
    tracks.forEach(item => item.setAttribute('aria-pressed', String(item === track)));
    document.querySelector('#now-playing').textContent = track.dataset.clipTitle;
    document.querySelector('#excerpt-text').textContent = track.dataset.clipText;
    document.querySelector('#excerpt-transcript').setAttribute('href', track.dataset.transcript);
    document.querySelector('#playback-status').textContent = '';
    interviewPlayer.setAttribute('aria-label', `Interview excerpt: ${track.dataset.clipTitle}`);
    if (interviewPlayer.getAttribute('src') !== track.dataset.clip) {
      interviewPlayer.src = track.dataset.clip;
      interviewPlayer.load();
    }
    try {
      await interviewPlayer.play();
    } catch (error) {
      if (request === playbackRequest && error.name !== 'AbortError') {
        document.querySelector('#playback-status').textContent = 'Use the player to start this excerpt.';
      }
    }
  }));
  players.forEach(player => player.addEventListener('play', () => players.forEach(other => {
    if (other !== player) other.pause();
  })));
  document.querySelector('#copy-citation')?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.querySelector('#citation').textContent);
      document.querySelector('#copy-status').textContent = 'Citation copied.';
    } catch (_) {
      document.querySelector('#copy-status').textContent = 'Select and copy the citation above.';
    }
  });
})();
