// Quiz QCM triés par catégorie
let quizMode = 'Toutes';
let currentQuizItem = null;

function quizCategories(){
  return ['Toutes', ...new Set(DATA.map(x => x.cat))];
}

function quizPool(){
  if (quizMode === 'Toutes') return DATA;
  return DATA.filter(x => x.cat === quizMode);
}

function shuffle(arr){
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

function installQcmUI(){
  const box = document.querySelector('#quiz .quizbox');
  if (!box) return;

  const input = document.getElementById('qInput');
  const checkBtn = document.getElementById('checkBtn');
  if (input) input.style.display = 'none';
  if (checkBtn) checkBtn.style.display = 'none';

  let choices = document.getElementById('qChoices');
  if (!choices) {
    choices = document.createElement('div');
    choices.id = 'qChoices';
    choices.style.display = 'grid';
    choices.style.gridTemplateColumns = '1fr';
    choices.style.gap = '10px';
    choices.style.marginTop = '14px';
    const result = document.getElementById('qResult');
    if (result) result.insertAdjacentElement('beforebegin', choices);
  }

  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) {
    nextBtn.textContent = 'Question suivante';
    nextBtn.onclick = () => newQ();
  }
}

function buildChoices(correct, pool){
  // On privilégie des mauvaises réponses de la même catégorie.
  let distractors = pool.filter(x => x !== correct && x.darija !== correct.darija);

  // Si la catégorie contient moins de 4 réponses distinctes, on complète avec le reste du lexique.
  if (distractors.length < 3) {
    const extra = DATA.filter(x => x !== correct && x.darija !== correct.darija && !distractors.some(d => d.darija === x.darija));
    distractors = distractors.concat(shuffle(extra));
  }

  const picked = shuffle(distractors).slice(0, 3);
  return shuffle([correct, ...picked]);
}

function answerQcm(selected, button){
  if (!currentQuizItem) return;
  const choices = document.getElementById('qChoices');
  if (!choices || choices.dataset.answered === '1') return;
  choices.dataset.answered = '1';

  const buttons = [...choices.querySelectorAll('button')];
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === currentQuizItem.darija) {
      btn.style.fontWeight = '800';
      btn.textContent = `✅ ${btn.dataset.answer}`;
    }
  });

  const result = document.getElementById('qResult');
  if (selected === currentQuizItem.darija) {
    result.innerHTML = `✅ Correct ! <strong>${currentQuizItem.darija}</strong> — ${currentQuizItem.arabic}`;
  } else {
    if (button) button.textContent = `❌ ${selected}`;
    result.innerHTML = `❌ La bonne réponse était <strong>${currentQuizItem.darija}</strong> — ${currentQuizItem.arabic}`;
  }
}

newQ = function(){
  installQcmUI();
  const pool = quizPool();
  const prompt = document.getElementById('qPrompt');
  const result = document.getElementById('qResult');
  const choices = document.getElementById('qChoices');

  if (!pool.length) {
    if (prompt) prompt.textContent = 'Aucune question disponible';
    if (choices) choices.innerHTML = '';
    if (result) result.textContent = '';
    currentQuizItem = null;
    return;
  }

  currentQuizItem = pool[Math.floor(Math.random()*pool.length)];
  qi = DATA.indexOf(currentQuizItem);
  if (prompt) prompt.textContent = currentQuizItem.fr;
  if (result) result.textContent = '';

  const options = buildChoices(currentQuizItem, pool);
  if (choices) {
    choices.dataset.answered = '0';
    choices.innerHTML = options.map(x => `<button type="button" data-answer="${x.darija.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}">${x.darija}</button>`).join('');
    choices.querySelectorAll('button').forEach(btn => {
      btn.onclick = () => answerQcm(btn.dataset.answer, btn);
    });
  }
};

installQuizModeButtons();
installQcmUI();
newQ();
