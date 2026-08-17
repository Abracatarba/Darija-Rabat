// Vocabulaire Darija Rabat — ajouts progressifs
const EXTRA_VOCAB = [
  {fr:'Fourchette', darija:'fourchita', arabic:'فرشيطة', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'fourchita = fourchette'},
  {fr:'Couteau', darija:'mouss', arabic:'موس', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'mouss = couteau'}
];

EXTRA_VOCAB.forEach(item => {
  const idx = DATA.findIndex(x => x.fr === item.fr);
  if (idx >= 0) DATA[idx] = item;
  else DATA.push(item);
});
if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
