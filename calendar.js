// Jours, saisons, mois et repères de temps — Darija Rabat / Salé
const CALENDAR_DATA = [
  // Une seule catégorie : Calendrier
  {fr:'Lundi', darija:'Ettnin', arabic:'الاثنين', cat:'Calendrier', note:'jour de la semaine', ex:'Ettnin = lundi'},
  {fr:'Mardi', darija:'Ettlat', arabic:'الثلاثاء', cat:'Calendrier', note:'jour de la semaine', ex:'Ettlat = mardi'},
  {fr:'Mercredi', darija:'Larbe3', arabic:'الأربعاء', cat:'Calendrier', note:'jour de la semaine', ex:'Larbe3 = mercredi'},
  {fr:'Jeudi', darija:'Elkhmis', arabic:'الخميس', cat:'Calendrier', note:'jour de la semaine', ex:'Elkhmis = jeudi'},
  {fr:'Vendredi', darija:'Eljem3a', arabic:'الجمعة', cat:'Calendrier', note:'jour de la semaine', ex:'Eljem3a = vendredi'},
  {fr:'Samedi', darija:'Essebt', arabic:'السبت', cat:'Calendrier', note:'jour de la semaine', ex:'Essebt = samedi'},
  {fr:'Dimanche', darija:'El7edd', arabic:'الحد', cat:'Calendrier', note:'jour de la semaine', ex:'El7edd = dimanche'},

  {fr:'Printemps', darija:'Rbi3', arabic:'ربيع', cat:'Calendrier', note:'saison', ex:'Rbi3 = printemps'},
  {fr:'Été', darija:'Sif', arabic:'صيف', cat:'Calendrier', note:'saison', ex:'Sif = été'},
  {fr:'Automne', darija:'Khrif', arabic:'خريف', cat:'Calendrier', note:'saison', ex:'Khrif = automne'},
  {fr:'Hiver', darija:'Shta', arabic:'شتا', cat:'Calendrier', note:'saison', ex:'Shta = hiver'},

  {fr:'Janvier', darija:'Yanayer', arabic:'يناير', cat:'Calendrier', note:'mois', ex:'Yanayer = janvier'},
  {fr:'Février', darija:'Febrayer', arabic:'فبراير', cat:'Calendrier', note:'mois', ex:'Febrayer = février'},
  {fr:'Mars', darija:'Mars', arabic:'مارس', cat:'Calendrier', note:'mois', ex:'Mars = mars'},
  {fr:'Avril', darija:'Abril', arabic:'أبريل', cat:'Calendrier', note:'mois', ex:'Abril = avril'},
  {fr:'Mai', darija:'May', arabic:'ماي', cat:'Calendrier', note:'mois', ex:'May = mai'},
  {fr:'Juin', darija:'Younyou', arabic:'يونيو', cat:'Calendrier', note:'mois', ex:'Younyou = juin'},
  {fr:'Juillet', darija:'Youlyouz', arabic:'يوليوز', cat:'Calendrier', note:'mois', ex:'Youlyouz = juillet'},
  {fr:'Août', darija:'Ghoucht', arabic:'غشت', cat:'Calendrier', note:'forme marocaine courante', ex:'Ghoucht = août'},
  {fr:'Septembre', darija:'Chtanber', arabic:'شتنبر', cat:'Calendrier', note:'forme marocaine courante', ex:'Chtanber = septembre'},
  {fr:'Octobre', darija:'Oktobr', arabic:'أكتوبر', cat:'Calendrier', note:'mois', ex:'Oktobr = octobre'},
  {fr:'Novembre', darija:'Nounber', arabic:'نونبر', cat:'Calendrier', note:'forme marocaine courante', ex:'Nounber = novembre'},
  {fr:'Décembre', darija:'Doujanber', arabic:'دجنبر', cat:'Calendrier', note:'forme marocaine courante', ex:'Doujanber = décembre'},

  {fr:'Heure', darija:'sa3a', arabic:'ساعة', cat:'Calendrier', note:'repère de temps', ex:'sa3a = heure'},
  {fr:'Minute', darija:'d9i9a', arabic:'دقيقة', cat:'Calendrier', note:'repère de temps', ex:'d9i9a = minute'},
  {fr:'Seconde', darija:'taniya', arabic:'تانية', cat:'Calendrier', note:'repère de temps', ex:'taniya = seconde'},
  {fr:'Jour', darija:'nhar', arabic:'نهار', cat:'Calendrier', note:'repère de temps', ex:'nhar = jour'},
  {fr:'Semaine', darija:'simana', arabic:'سيمانة', cat:'Calendrier', note:'repère de temps', ex:'simana = semaine'},
  {fr:'Mois', darija:'chher', arabic:'شهر', cat:'Calendrier', note:'repère de temps', ex:'chher = mois'},
  {fr:'Année', darija:'3am', arabic:'عام', cat:'Calendrier', note:'repère de temps', ex:'3am = année'},
  {fr:'Matin', darija:'sba7', arabic:'صباح', cat:'Calendrier', note:'moment de la journée', ex:'sba7 = matin'},
  {fr:'Après-midi', darija:'3chiya', arabic:'العشية', cat:'Calendrier', note:'forme validée', ex:'3chiya = après-midi'},
  {fr:'Coucher de soleil', darija:'meghreb', arabic:'المغرب', cat:'Calendrier', note:'forme validée', ex:'meghreb = coucher de soleil'},
  {fr:'Nuit', darija:'lil', arabic:'ليل', cat:'Calendrier', note:'moment de la journée', ex:'lil = nuit'},
  {fr:'Midi', darija:'ness nehar', arabic:'نص النهار', cat:'Calendrier', note:'forme validée', ex:'ness nehar = midi'},
  {fr:'Cette semaine', darija:'had essimana', arabic:'هاد السيمانة', cat:'Calendrier', note:'forme validée', ex:'had essimana = cette semaine'},
  {fr:'La semaine prochaine', darija:'essimana ejjayya', arabic:'السيمانة الجاية', cat:'Calendrier', note:'forme validée', ex:'essimana ejjayya = la semaine prochaine'},
  {fr:'La semaine dernière', darija:'essimana elfayta', arabic:'السيمانة الفايتة', cat:'Calendrier', note:'forme validée', ex:'essimana elfayta = la semaine dernière'},
  {fr:'Après-demain', darija:'be3d ghedda', arabic:'بعد غدا', cat:'Calendrier', note:'forme validée', ex:'be3d ghedda = après-demain'},
  {fr:'Aube', darija:'fjer', arabic:'فجر', cat:'Calendrier', note:'forme validée', ex:'fjer = aube'}
];

CALENDAR_DATA.forEach(item => {
  const idx = DATA.findIndex(x => x.fr === item.fr);
  if (idx >= 0) DATA[idx] = item;
  else DATA.push(item);
});

if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
