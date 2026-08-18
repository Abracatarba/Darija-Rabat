// Pronoms personnels — Darija Rabat / Salé
const PRONOUN_DATA = [
  {fr:'Je / moi', darija:'ana', arabic:'أنا', cat:'Pronoms', note:'1re personne du singulier', ex:'ana = je / moi'},
  {fr:'Tu / toi (garçon)', darija:'nta', arabic:'نتا', cat:'Pronoms', note:'masculin singulier', ex:'nta = tu / toi (garçon)'},
  {fr:'Tu / toi (fille)', darija:'nti', arabic:'نتي', cat:'Pronoms', note:'féminin singulier', ex:'nti = tu / toi (fille)'},
  {fr:'Il / lui', darija:'howa', arabic:'هو', cat:'Pronoms', note:'masculin singulier', ex:'howa = il / lui'},
  {fr:'Elle', darija:'hiya', arabic:'هي', cat:'Pronoms', note:'féminin singulier', ex:'hiya = elle'},
  {fr:'Nous', darija:'7na', arabic:'حنا', cat:'Pronoms', note:'1re personne du pluriel', ex:'7na = nous'},
  {fr:'Vous', darija:'ntoma', arabic:'نتوما', cat:'Pronoms', note:'2e personne du pluriel', ex:'ntoma = vous'},
  {fr:'Ils / elles', darija:'homa', arabic:'هوما', cat:'Pronoms', note:'3e personne du pluriel', ex:'homa = ils / elles'}
];

PRONOUN_DATA.forEach(item => {
  const idx = DATA.findIndex(x => x.fr === item.fr);
  if (idx >= 0) DATA[idx] = item;
  else DATA.push(item);
});

if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
