(() => {
  const transcriptSearch = document.querySelector('#transcript-search');
  function filterTranscript() {
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
  }
  transcriptSearch?.addEventListener('input', filterTranscript);
  function revealTranscriptTarget(hash) {
    if (!transcriptSearch || !hash.startsWith('#')) return null;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch (_) { return null; }
    const target = document.getElementById(id);
    if (!target?.closest('.transcript-section')) return null;
    if (transcriptSearch.value) {
      transcriptSearch.value = '';
      filterTranscript();
    }
    return target;
  }
  // A passage link must remain usable after filtering, without reloading the audio.
  document.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    const target = revealTranscriptTarget(hash);
    if (target && location.hash === hash) target.scrollIntoView();
  });
  window.addEventListener('hashchange', () => {
    revealTranscriptTarget(location.hash)?.scrollIntoView();
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
