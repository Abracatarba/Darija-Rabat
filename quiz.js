// Quiz QCM par catégorie — session complète sans répétition
let quizMode = 'Toutes';
let currentQuizItem = null;
let quizQueue = [];
let quizPosition = 0;
let quizCorrect = 0;
let quizAnswered = false;

function quizCategories(){ return ['Toutes', ...new Set(DATA.map(x => x.cat))]; }
function quizPool(){ return quizMode === 'Toutes' ? DATA : DATA.filter(x => x.cat === quizMode); }
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function esc(s){ return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function installQuizModeButtons(){
  const section=document.getElementById('quiz');
  const box=section&&section.querySelector('.quizbox');
  if(!box)return;
  let modes=document.getElementById('quizModes');
  if(!modes){
    modes=document.createElement('div'); modes.id='quizModes'; modes.className='tabs';
    const badge=box.querySelector('.badge');
    if(badge) badge.insertAdjacentElement('afterend',modes); else box.prepend(modes);
  }
  modes.innerHTML=quizCategories().map(c=>`<button class="${c===quizMode?'active':''}" data-quiz-cat="${esc(c)}">${esc(c)}</button>`).join('');
  modes.querySelectorAll('[data-quiz-cat]').forEach(btn=>btn.onclick=()=>{
    quizMode=btn.dataset.quizCat;
    installQuizModeButtons();
    startQuizSession();
  });
}

function installQcmUI(){
  const box=document.querySelector('#quiz .quizbox'); if(!box)return;
  const input=document.getElementById('qInput'); const checkBtn=document.getElementById('checkBtn');
  if(input)input.style.display='none'; if(checkBtn)checkBtn.style.display='none';
  let progress=document.getElementById('qProgress');
  if(!progress){ progress=document.createElement('div'); progress.id='qProgress'; progress.style.margin='12px 0 4px'; progress.style.fontWeight='700'; const prompt=document.getElementById('qPrompt'); if(prompt)prompt.insertAdjacentElement('beforebegin',progress); }
  let choices=document.getElementById('qChoices');
  if(!choices){ choices=document.createElement('div'); choices.id='qChoices'; choices.style.display='grid'; choices.style.gridTemplateColumns='1fr'; choices.style.gap='10px'; choices.style.marginTop='14px'; const result=document.getElementById('qResult'); if(result)result.insertAdjacentElement('beforebegin',choices); }
  const nextBtn=document.getElementById('nextBtn');
  if(nextBtn){ nextBtn.textContent='Question suivante'; nextBtn.onclick=()=>nextQuestion(); }
}

function buildChoices(correct,pool){
  let distractors=pool.filter(x=>x!==correct&&x.darija!==correct.darija);
  if(distractors.length<3){
    const extra=DATA.filter(x=>x!==correct&&x.darija!==correct.darija&&!distractors.some(d=>d.darija===x.darija));
    distractors=distractors.concat(shuffle(extra));
  }
  return shuffle([correct,...shuffle(distractors).slice(0,3)]);
}

function startQuizSession(){
  installQcmUI();
  quizQueue=shuffle(quizPool());
  quizPosition=0; quizCorrect=0; quizAnswered=false; currentQuizItem=null;
  showQuizQuestion();
}

function showQuizQuestion(){
  installQcmUI();
  const prompt=document.getElementById('qPrompt'); const result=document.getElementById('qResult');
  const choices=document.getElementById('qChoices'); const progress=document.getElementById('qProgress'); const nextBtn=document.getElementById('nextBtn');
  if(!quizQueue.length){
    if(progress)progress.textContent=''; if(prompt)prompt.textContent='Aucune question disponible'; if(choices)choices.innerHTML=''; if(result)result.textContent=''; if(nextBtn)nextBtn.style.display='none'; return;
  }
  if(quizPosition>=quizQueue.length){ finishQuizSession(); return; }
  currentQuizItem=quizQueue[quizPosition]; qi=DATA.indexOf(currentQuizItem); quizAnswered=false;
  if(progress)progress.textContent=`Question ${quizPosition+1} / ${quizQueue.length}`;
  if(prompt)prompt.textContent=currentQuizItem.fr; if(result)result.textContent='';
  if(nextBtn){ nextBtn.style.display=''; nextBtn.textContent=quizPosition===quizQueue.length-1?'Voir mon résultat':'Question suivante'; nextBtn.disabled=true; }
  const options=buildChoices(currentQuizItem,quizPool());
  if(choices){
    choices.dataset.answered='0';
    choices.innerHTML=options.map(x=>`<button type="button" data-answer="${esc(x.darija)}">${esc(x.darija)}</button>`).join('');
    choices.querySelectorAll('button').forEach(btn=>btn.onclick=()=>answerQcm(btn.dataset.answer,btn));
  }
}

function answerQcm(selected,button){
  if(!currentQuizItem||quizAnswered)return;
  const choices=document.getElementById('qChoices'); if(!choices)return;
  quizAnswered=true; choices.dataset.answered='1';
  const good=selected===currentQuizItem.darija; if(good)quizCorrect++;
  [...choices.querySelectorAll('button')].forEach(btn=>{
    btn.disabled=true;
    if(btn.dataset.answer===currentQuizItem.darija){ btn.style.fontWeight='800'; btn.textContent=`✅ ${btn.dataset.answer}`; }
  });
  const result=document.getElementById('qResult');
  if(result) result.innerHTML=good?`✅ Correct ! <strong>${esc(currentQuizItem.darija)}</strong> — ${esc(currentQuizItem.arabic)}`:`❌ La bonne réponse était <strong>${esc(currentQuizItem.darija)}</strong> — ${esc(currentQuizItem.arabic)}`;
  if(!good&&button)button.textContent=`❌ ${selected}`;
  const nextBtn=document.getElementById('nextBtn'); if(nextBtn)nextBtn.disabled=false;
}

function nextQuestion(){
  if(!quizAnswered)return;
  quizPosition++;
  showQuizQuestion();
}

function finishQuizSession(){
  const total=quizQueue.length; const pct=total?Math.round((quizCorrect/total)*100):0; const errors=total-quizCorrect;
  const progress=document.getElementById('qProgress'); const prompt=document.getElementById('qPrompt'); const choices=document.getElementById('qChoices'); const result=document.getElementById('qResult'); const nextBtn=document.getElementById('nextBtn');
  if(progress)progress.textContent=`Quiz terminé — ${quizMode}`;
  if(prompt)prompt.textContent=`${quizCorrect} / ${total} bonnes réponses`;
  if(choices)choices.innerHTML=`<div style="text-align:center;font-size:2rem;font-weight:800;padding:18px 0">${pct} %</div>`;
  if(result)result.innerHTML=`${errors===0?'🎉 Sans faute !':`${errors} erreur${errors>1?'s':''} sur ${total}.`} Chaque mot est passé une seule fois.`;
  if(nextBtn){ nextBtn.style.display=''; nextBtn.disabled=false; nextBtn.textContent='Recommencer le quiz'; nextBtn.onclick=()=>{ nextBtn.onclick=()=>nextQuestion(); startQuizSession(); }; }
  currentQuizItem=null;
}

// Compatibilité avec le bouton/ancien code de l'application.
newQ=function(){ startQuizSession(); };

installQuizModeButtons();
installQcmUI();
startQuizSession();
