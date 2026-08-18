// Jours, saisons et mois — Darija Rabat / Salé
const CALENDAR_DATA = [
  // Jours de la semaine — formes reprises des captures validées
  {fr:'Lundi', darija:'Ettnin', arabic:'الاثنين', cat:'Jours', note:'jour de la semaine', ex:'Ettnin = lundi'},
  {fr:'Mardi', darija:'Ettlat', arabic:'الثلاثاء', cat:'Jours', note:'jour de la semaine', ex:'Ettlat = mardi'},
  {fr:'Mercredi', darija:'Larbe3', arabic:'الأربعاء', cat:'Jours', note:'jour de la semaine', ex:'Larbe3 = mercredi'},
  {fr:'Jeudi', darija:'Elkhmis', arabic:'الخميس', cat:'Jours', note:'jour de la semaine', ex:'Elkhmis = jeudi'},
  {fr:'Vendredi', darija:'Eljem3a', arabic:'الجمعة', cat:'Jours', note:'jour de la semaine', ex:'Eljem3a = vendredi'},
  {fr:'Samedi', darija:'Essebt', arabic:'السبت', cat:'Jours', note:'jour de la semaine', ex:'Essebt = samedi'},
  {fr:'Dimanche', darija:'El7edd', arabic:'الحد', cat:'Jours', note:'jour de la semaine', ex:'El7edd = dimanche'},

  // Saisons — formes reprises des captures
  {fr:'Printemps', darija:'Rbi3', arabic:'ربيع', cat:'Saisons', note:'saison', ex:'Rbi3 = printemps'},
  {fr:'Été', darija:'Sif', arabic:'صيف', cat:'Saisons', note:'saison', ex:'Sif = été'},
  {fr:'Automne', darija:'Khrif', arabic:'خريف', cat:'Saisons', note:'saison', ex:'Khrif = automne'},
  {fr:'Hiver', darija:'Shta', arabic:'شتا', cat:'Saisons', note:'saison', ex:'Shta = hiver'},

  // Mois — formes marocaines courantes
  {fr:'Janvier', darija:'Yanayer', arabic:'يناير', cat:'Mois', note:'mois', ex:'Yanayer = janvier'},
  {fr:'Février', darija:'Febrayer', arabic:'فبراير', cat:'Mois', note:'mois', ex:'Febrayer = février'},
  {fr:'Mars', darija:'Mars', arabic:'مارس', cat:'Mois', note:'mois', ex:'Mars = mars'},
  {fr:'Avril', darija:'Abril', arabic:'أبريل', cat:'Mois', note:'mois', ex:'Abril = avril'},
  {fr:'Mai', darija:'May', arabic:'ماي', cat:'Mois', note:'mois', ex:'May = mai'},
  {fr:'Juin', darija:'Younyou', arabic:'يونيو', cat:'Mois', note:'mois', ex:'Younyou = juin'},
  {fr:'Juillet', darija:'Youlyouz', arabic:'يوليوز', cat:'Mois', note:'mois', ex:'Youlyouz = juillet'},
  {fr:'Août', darija:'Ghoucht', arabic:'غشت', cat:'Mois', note:'forme marocaine courante', ex:'Ghoucht = août'},
  {fr:'Septembre', darija:'Chtanber', arabic:'شتنبر', cat:'Mois', note:'forme marocaine courante', ex:'Chtanber = septembre'},
  {fr:'Octobre', darija:'Oktobr', arabic:'أكتوبر', cat:'Mois', note:'mois', ex:'Oktobr = octobre'},
  {fr:'Novembre', darija:'Nounber', arabic:'نونبر', cat:'Mois', note:'forme marocaine courante', ex:'Nounber = novembre'},
  {fr:'Décembre', darija:'Doujanber', arabic:'دجنبر', cat:'Mois', note:'forme marocaine courante', ex:'Doujanber = décembre'}
];

CALENDAR_DATA.forEach(item => {
  const idx = DATA.findIndex(x => x.fr === item.fr);
  if (idx >= 0) DATA[idx] = item;
  else DATA.push(item);
});

if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
