// Vocabulaire Darija Rabat — ajouts progressifs
const EXTRA_VOCAB = [
  {fr:'Fourchette', darija:'fourchetta', arabic:'فورشيطة', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'fourchetta = fourchette'},
  {fr:'Couteau', darija:'mouss', arabic:'موس', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'mouss = couteau'}
];

EXTRA_VOCAB.forEach(item => {
  const exists = DATA.some(x => x.fr === item.fr && x.darija === item.darija);
  if (!exists) DATA.push(item);
});
if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
