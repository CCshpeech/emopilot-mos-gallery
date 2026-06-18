(() => {
  const data = window.EMOPILOT_MOS_DATA;
  if (!data) throw new Error('EMOPILOT_MOS_DATA is not loaded');

  const $ = (selector, root = document) => root.querySelector(selector);
  const casesEl = $('#cases');
  const navEl = $('#categoryNav');

  $('#categoryCount').textContent = data.counts.categories;
  $('#retCount').textContent = data.counts.retrievalPerCategory;
  $('#genCount').textContent = data.counts.generationPerCategory;

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function cardKind(item) {
    const type = (item.type || '').toLowerCase();
    const name = (item.name || '').toLowerCase();
    if (type.includes('oracle')) return 'oracle';
    if (type.includes('lower')) return 'lower';
    if (type.includes('direct')) return 'direct';
    if (type.includes('baseline') || name.includes('no emotion')) return 'baseline';
    if (type.includes('speaker')) return 'speaker';
    if (type.includes('reference')) return 'reference';
    return '';
  }

  function audioCard(item) {
    const article = document.createElement('article');
    article.className = `audio-card ${cardKind(item)}`.trim();
    article.innerHTML = `
      <h4>${escapeHtml(item.name)}</h4>
      <p>${escapeHtml(item.type)} · ${escapeHtml(item.note)}</p>
      <span class="file-path">${escapeHtml(item.src)}</span>
      <audio controls preload="none" src="${escapeHtml(item.src)}"></audio>
    `;
    return article;
  }

  function group(title, note, items, extraClass = '') {
    const section = document.createElement('section');
    section.className = 'group';
    section.innerHTML = `
      <h3>${escapeHtml(title)}</h3>
      <p class="group-note">${escapeHtml(note)}</p>
      <div class="cards ${extraClass}"></div>
    `;
    const cards = $('.cards', section);
    items.forEach((item) => cards.appendChild(audioCard(item)));
    return section;
  }

  function byFile(items) {
    return new Map(items.map((item) => [item.file, item]));
  }

  function generationGroup(cat) {
    const groups = [
      {
        title: 'EmoPilot prompt retrieval mode',
        note: 'Generated with retrieved emotion prompt audio and IndexTTS2.',
        files: ['LLM_VAD_gen.wav', 'VADPT_LLMVAD_gen.wav', 'TextAudioFFN_gen.wav', 'TextPromptTF_gen.wav'],
      },
      {
        title: 'EmoPilot direct conditioning mode',
        note: 'Generated with a predicted latent emotion embedding and IndexTTS2.',
        files: ['VADPT_LLMVAD_Direct_gen.wav', 'TextPromptTF_Direct_gen.wav'],
      },
      {
        title: 'No explicit emotion-cue baselines',
        note: 'Generated from speaker/text inputs without an explicit retrieved or predicted emotion cue.',
        files: ['IndexTTS2_SpeakerOnly_gen.wav', 'Qwen3TTS_gen.wav', 'FishAudio2_gen.wav'],
      },
      {
        title: 'Lower bound',
        note: 'Generated with a random retrieved prompt.',
        files: ['Random_gen.wav'],
      },
      {
        title: 'Oracle cue upper bound',
        note: 'Generated with the paired GT target audio as the emotion prompt.',
        files: ['IndexTTS2_GTReference_gen.wav'],
      },
    ];
    const itemMap = byFile(cat.generation);
    const section = document.createElement('section');
    section.className = 'group generation-section';
    section.innerHTML = `
      <h3>Generated speech for G-MOS</h3>
      <p class="group-note">Rate emotional similarity to GT and whether the emotion fits the transcript.</p>
    `;
    groups.forEach((spec) => {
      const block = document.createElement('div');
      block.className = 'subgroup';
      block.innerHTML = `
        <h4 class="subgroup-title">${escapeHtml(spec.title)}</h4>
        <p class="subgroup-note">${escapeHtml(spec.note)}</p>
        <div class="cards generation-grid"></div>
      `;
      const cards = $('.cards', block);
      spec.files.forEach((file) => {
        const item = itemMap.get(file);
        if (item) cards.appendChild(audioCard(item));
      });
      section.appendChild(block);
    });
    return section;
  }

  function renderCategory(cat, index) {
    const section = document.createElement('section');
    section.className = 'case-section';
    section.id = cat.id;
    section.style.setProperty('--i', index);
    section.innerHTML = `
      <div class="case-head">
        <div>
          <p class="eyebrow">Case ${String(index + 1).padStart(2, '0')}</p>
          <div class="case-title">
            <h2>${escapeHtml(cat.display)}</h2>
            <span class="tag official">MSP ${escapeHtml(cat.officialLabel)}</span>
            <span class="tag">VAD ${escapeHtml(cat.vad.join(', '))}</span>
          </div>
          <p class="transcript">${escapeHtml(cat.transcript)}</p>
        </div>
        <dl class="meta-grid">
          <div class="meta-tile"><dt>Audio0 source</dt><dd>${escapeHtml(cat.fileName0)}</dd></div>
          <div class="meta-tile"><dt>GT target</dt><dd>${escapeHtml(cat.fileNameGT)}</dd></div>
          <div class="meta-tile"><dt>Source folder</dt><dd>${escapeHtml(cat.sourceFolder)}</dd></div>
        </dl>
      </div>
    `;
    section.appendChild(group(
      'GT and Audio0 references',
      'Use GT as the emotion target. Audio0 is the source speaker prompt used by the zero-shot TTS systems.',
      [cat.reference, cat.audio0],
      'reference reference-duo',
    ));
    section.appendChild(group(
      'Retrieved emotion prompts for R-MOS',
      'Prompt audio does not need to match the transcript content. Rate emotional similarity and speaking style relative to GT.',
      cat.retrieval,
      'retrieval-grid',
    ));
    section.appendChild(generationGroup(cat));
    return section;
  }

  function pauseOtherAudio(current) {
    document.querySelectorAll('audio').forEach((audio) => {
      if (audio !== current && !audio.paused) audio.pause();
    });
  }

  data.categories.forEach((cat, index) => {
    const link = document.createElement('a');
    link.href = `#${cat.id}`;
    link.textContent = cat.display;
    navEl.appendChild(link);
    casesEl.appendChild(renderCategory(cat, index));
  });

  document.addEventListener('play', (event) => {
    if (event.target?.tagName === 'AUDIO') pauseOtherAudio(event.target);
  }, true);
})();
