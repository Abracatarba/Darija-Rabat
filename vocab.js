// Vocabulaire Darija Rabat — ajouts progressifs
// Mise à jour de publication : 17/08/2026
const EXTRA_VOCAB = [
  {fr:'Fourchette', darija:'fourchita', arabic:'فرشيطة', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'fourchita = fourchette'},
  {fr:'Couteau', darija:'mouss', arabic:'موس', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'mouss = couteau'}
];

EXTRA_VOCAB.forEach(item => {
  const idx = DATA.findIndex(x => x.fr === item.fr);
  if (idx >= 0) DATA[idx] = item;
  else DATA.push(item);
});

// Ranger l'eau (lma) dans Nourriture.
const lmaItem = DATA.find(x => x.darija === 'lma' || x.fr === 'Eau');
if (lmaItem) lmaItem.cat = 'Nourriture';

if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
