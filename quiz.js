// Quiz QCM par catégorie — session complète sans répétition
let quizMode = 'Toutes';
let quizDirection = 'fr-darija';
let currentQuizItem = null;
let quizQueue = [];
let quizPosition = 0;
let quizCorrect = 0;
let quizAnswered = false;
const FAVORITE_GROUP_SIZE = 20;

function favoriteItems(){ return DATA.filter((x,i) => favorites.has(i)); }
function favoriteQuizModes(){
  const count=favoriteItems().length;
  if(!count) return ['⭐ Favoris'];
  const groups=Math.ceil(count/FAVORITE_GROUP_SIZE);
  const modes=[];
  for(let i=1;i<=groups;i++) modes.push(`⭐ Favoris ${i}`);
  if(groups>1) modes.push('⭐ Tous les favoris');
  return modes;
}
function quizCategories(){ return ['Toutes', ...favoriteQuizModes(), ...new Set(DATA.map(x => x.cat))]; }
function quizPool(){
  if (quizMode === 'Toutes') return DATA;
  const favs=favoriteItems();
  if (quizMode === '⭐ Favoris' || quizMode === '⭐ Tous les favoris') return favs;
  const match=quizMode.match(/^⭐ Favoris (\d+)$/);
  if(match){
    const group=Number(match[1])-1;
    return favs.slice(group*FAVORITE_GROUP_SIZE,(group+1)*FAVORITE_GROUP_SIZE);
  }
  return DATA.filter(x => x.cat === quizMode);
}
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function esc(s){ return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function answerValue(x){ return quizDirection==='fr-darija' ? x.darija : x.fr; }
function promptValue(x){ return quizDirection==='fr-darija' ? x.fr : x.darija; }
function isFavoriteMode(){ return quizMode.startsWith('⭐ Favoris') || quizMode==='⭐ Tous les favoris'; }

function installQuizModeButtons(){
  const section=document.getElementById('quiz');
  const box=section&&section.querySelector('.quizbox');
  if(!box)return;
  let direction=document.getElementById('quizDirection');
  if(!direction){
    direction=document.createElement('div'); direction.id='quizDirection'; direction.className='tabs';
    const badge=box.querySelector('.badge');
    if(badge) badge.insertAdjacentElement('afterend',direction); else box.prepend(direction);
  }
  direction.innerHTML=`<button class="${quizDirection==='fr-darija'?'active':''}" data-dir="fr-darija">Français → Darija</button><button class="${quizDirection==='darija-fr'?'active':''}" data-dir="darija-fr">Darija → Français</button>`;
  direction.querySelectorAll('[data-dir]').forEach(btn=>btn.onclick=()=>{ quizDirection=btn.dataset.dir; installQuizModeButtons(); startQuizSession(); });
  let modes=document.getElementById('quizModes');
  if(!modes){ modes=document.createElement('div'); modes.id='quizModes'; modes.className='tabs'; direction.insertAdjacentElement('afterend',modes); }
  const cats=quizCategories();
  if(!cats.includes(quizMode) && isFavoriteMode()) quizMode=cats.find(c=>c.startsWith('⭐ Favoris')) || 'Toutes';
  modes.innerHTML=cats.map(c=>`<button class="${c===quizMode?'active':''}" data-quiz-cat="${esc(c)}">${esc(c)}</button>`).join('');
  modes.querySelectorAll('[data-quiz-cat]').forEach(btn=>btn.onclick=()=>{ quizMode=btn.dataset.quizCat; installQuizModeButtons(); startQuizSession(); });
}

function installQcmUI(){
  const box=document.querySelector('#quiz .quizbox'); if(!box)return;
  const input=document.getElementById('qInput'); const checkBtn=document.getElementById('checkBtn');
  if(input)input.style.display='none'; if(checkBtn)checkBtn.style.display='none';
  let progress=document.getElementById('qProgress');
  if(!progress){ progress=document.createElement('div'); progress.id='qProgress'; progress.style.margin='12px 0 4px'; progress.style.fontWeight='700'; const prompt=document.getElementById('qPrompt'); if(prompt)prompt.insertAdjacentElement('beforebegin',progress); }
  let choices=document.getElementById('qChoices');
  if(!choices){ choices=document.createElement('div'); choices.id='qChoices'; choices.style.display='grid'; choices.style.gridTemplateColumns='1fr'; choices.style.gap='10px'; choices.style.marginTop='14px'; const result=document.getElementById('qResult'); if(result)result.insertAdjacentElement('beforebegin',choices); }
  const nextBtn=document.getElementById('nextBtn'); if(nextBtn){ nextBtn.textContent='Question suivante'; nextBtn.onclick=()=>nextQuestion(); }
}

function buildChoices(correct,pool){
  const correctAnswer=answerValue(correct);
  let distractors=pool.filter(x=>x!==correct&&answerValue(x)!==correctAnswer);
  if(distractors.length<3){
    const extra=DATA.filter(x=>x!==correct&&answerValue(x)!==correctAnswer&&!distractors.some(d=>answerValue(d)===answerValue(x)));
    distractors=distractors.concat(shuffle(extra));
  }
  return shuffle([correct,...shuffle(distractors).slice(0,3)]);
}
function startQuizSession(){ installQcmUI(); quizQueue=shuffle(quizPool()); quizPosition=0; quizCorrect=0; quizAnswered=false; currentQuizItem=null; showQuizQuestion(); }
function showQuizQuestion(){
  installQcmUI();
  const prompt=document.getElementById('qPrompt'), result=document.getElementById('qResult'), choices=document.getElementById('qChoices'), progress=document.getElementById('qProgress'), nextBtn=document.getElementById('nextBtn');
  if(!quizQueue.length){ if(progress)progress.textContent=isFavoriteMode()?'Quiz Favoris':''; if(prompt)prompt.textContent=isFavoriteMode()?'Ajoute d’abord des mots en favoris ⭐':'Aucune question disponible'; if(choices)choices.innerHTML=''; if(result)result.textContent=''; if(nextBtn)nextBtn.style.display='none'; return; }
  if(quizPosition>=quizQueue.length){ finishQuizSession(); return; }
  currentQuizItem=quizQueue[quizPosition]; qi=DATA.indexOf(currentQuizItem); quizAnswered=false;
  if(progress)progress.textContent=`Question ${quizPosition+1} / ${quizQueue.length}`;
  if(prompt)prompt.textContent=promptValue(currentQuizItem); if(result)result.textContent='';
  if(nextBtn){ nextBtn.style.display=''; nextBtn.textContent=quizPosition===quizQueue.length-1?'Voir mon résultat':'Question suivante'; nextBtn.disabled=true; }
  const options=buildChoices(currentQuizItem,quizPool());
  if(choices){ choices.innerHTML=options.map(x=>`<button type="button" data-answer="${esc(answerValue(x))}">${esc(answerValue(x))}</button>`).join(''); choices.querySelectorAll('button').forEach(btn=>btn.onclick=()=>answerQcm(btn.dataset.answer,btn)); }
}
function answerQcm(selected,button){
  if(!currentQuizItem||quizAnswered)return; const choices=document.getElementById('qChoices'); if(!choices)return; quizAnswered=true;
  const correctAnswer=answerValue(currentQuizItem), good=selected===correctAnswer; if(good)quizCorrect++;
  [...choices.querySelectorAll('button')].forEach(btn=>{ btn.disabled=true; if(btn.dataset.answer===correctAnswer){ btn.style.fontWeight='800'; btn.textContent=`✅ ${btn.dataset.answer}`; } });
  const result=document.getElementById('qResult');
  if(result){ if(quizDirection==='fr-darija') result.innerHTML=good?`✅ Correct ! <strong>${esc(currentQuizItem.darija)}</strong> — ${esc(currentQuizItem.arabic)}`:`❌ La bonne réponse était <strong>${esc(currentQuizItem.darija)}</strong> — ${esc(currentQuizItem.arabic)}`; else result.innerHTML=good?`✅ Correct ! <strong>${esc(currentQuizItem.fr)}</strong> — ${esc(currentQuizItem.arabic)}`:`❌ La bonne réponse était <strong>${esc(currentQuizItem.fr)}</strong> — ${esc(currentQuizItem.arabic)}`; }
  if(!good&&button)button.textContent=`❌ ${selected}`; const nextBtn=document.getElementById('nextBtn'); if(nextBtn)nextBtn.disabled=false;
}
function nextQuestion(){ if(!quizAnswered)return; quizPosition++; showQuizQuestion(); }
function finishQuizSession(){
  const total=quizQueue.length, pct=total?Math.round((quizCorrect/total)*100):0, errors=total-quizCorrect;
  const progress=document.getElementById('qProgress'), prompt=document.getElementById('qPrompt'), choices=document.getElementById('qChoices'), result=document.getElementById('qResult'), nextBtn=document.getElementById('nextBtn');
  const dirLabel=quizDirection==='fr-darija'?'Français → Darija':'Darija → Français';
  if(progress)progress.textContent=`Quiz terminé — ${quizMode} — ${dirLabel}`; if(prompt)prompt.textContent=`${quizCorrect} / ${total} bonnes réponses`; if(choices)choices.innerHTML=`<div style="text-align:center;font-size:2rem;font-weight:800;padding:18px 0">${pct} %</div>`; if(result)result.innerHTML=`${errors===0?'🎉 Sans faute !':`${errors} erreur${errors>1?'s':''} sur ${total}.`} Chaque mot est passé une seule fois.`;
  if(nextBtn){ nextBtn.style.display=''; nextBtn.disabled=false; nextBtn.textContent='Recommencer le quiz'; nextBtn.onclick=()=>{ nextBtn.onclick=()=>nextQuestion(); startQuizSession(); }; } currentQuizItem=null;
}
newQ=function(){ startQuizSession(); };
installQuizModeButtons(); installQcmUI(); startQuizSession();
