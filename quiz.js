// Quiz triés par catégorie
let quizMode = 'Toutes';

function quizCategories(){
  return ['Toutes', ...new Set(DATA.map(x => x.cat))];
}

function quizPool(){
  if (quizMode === 'Toutes') return DATA;
  return DATA.filter(x => x.cat === quizMode);
}

function installQuizModeButtons(){
  const section = document.getElementById('quiz');
  const box = section && section.querySelector('.quizbox');
  if (!box) return;

  let modes = document.getElementById('quizModes');
  if (!modes) {
    modes = document.createElement('div');
    modes.id = 'quizModes';
    modes.className = 'tabs';
    const badge = box.querySelector('.badge');
    if (badge) badge.insertAdjacentElement('afterend', modes);
    else box.prepend(modes);
  }

  const cats = quizCategories();
  modes.innerHTML = cats.map(c => `<button class="${c===quizMode?'active':''}" data-quiz-cat="${c}">${c}</button>`).join('');

  modes.querySelectorAll('[data-quiz-cat]').forEach(btn => {
    btn.onclick = () => {
      quizMode = btn.dataset.quizCat;
      installQuizModeButtons();
      newQ();
    };
  });
}

newQ = function(){
  const pool = quizPool();
  if (!pool.length) {
    document.getElementById('qPrompt').textContent = 'Aucune question disponible';
    document.getElementById('qInput').value = '';
    document.getElementById('qResult').textContent = '';
    return;
  }
  const x = pool[Math.floor(Math.random()*pool.length)];
  qi = DATA.indexOf(x);
  document.getElementById('qPrompt').textContent = x.fr;
  document.getElementById('qInput').value = '';
  document.getElementById('qResult').textContent = '';
};

installQuizModeButtons();
