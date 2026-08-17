// Quiz séparés : vocabulaire général et nombres
let quizMode = 'vocab';

function quizPool(){
  if (quizMode === 'numbers') return DATA.filter(x => x.cat === 'Nombres');
  return DATA.filter(x => x.cat !== 'Nombres');
}

function installQuizModeButtons(){
  const section = document.getElementById('quiz');
  const box = section && section.querySelector('.quizbox');
  if (!box || document.getElementById('quizModes')) return;

  const modes = document.createElement('div');
  modes.id = 'quizModes';
  modes.className = 'tabs';
  modes.innerHTML = '<button id="quizVocabBtn" class="active">Vocabulaire</button><button id="quizNumbersBtn">Chiffres</button>';
  const badge = box.querySelector('.badge');
  if (badge) badge.insertAdjacentElement('afterend', modes);
  else box.prepend(modes);

  const vocabBtn = document.getElementById('quizVocabBtn');
  const numbersBtn = document.getElementById('quizNumbersBtn');

  vocabBtn.onclick = () => {
    quizMode = 'vocab';
    vocabBtn.classList.add('active');
    numbersBtn.classList.remove('active');
    newQ();
  };

  numbersBtn.onclick = () => {
    quizMode = 'numbers';
    numbersBtn.classList.add('active');
    vocabBtn.classList.remove('active');
    newQ();
  };
}

newQ = function(){
  const pool = quizPool();
  if (!pool.length) {
    document.getElementById('qPrompt').textContent = 'Aucune question disponible';
    return;
  }
  const x = pool[Math.floor(Math.random()*pool.length)];
  qi = DATA.indexOf(x);
  document.getElementById('qPrompt').textContent = x.fr;
  document.getElementById('qInput').value = '';
  document.getElementById('qResult').textContent = '';
};

installQuizModeButtons();
