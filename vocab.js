// Vocabulaire Darija Rabat — ajouts progressifs
// Mise à jour de publication : 17/08/2026
const EXTRA_VOCAB = [
  {fr:'Fourchette', darija:'fourchita', arabic:'فرشيطة', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'fourchita = fourchette'},
  {fr:'Couteau', darija:'mouss', arabic:'موس', cat:'Nourriture', note:'forme retenue pour Rabat', ex:'mouss = couteau'},

  {fr:'Rouge', darija:'7mer', arabic:'حمر', cat:'Couleurs', note:'forme validée', ex:'7mer = rouge'},
  {fr:'Vert', darija:'khdar', arabic:'خضر', cat:'Couleurs', note:'forme validée', ex:'khdar = vert'},
  {fr:'Bleu', darija:'zraq', arabic:'زرق', cat:'Couleurs', note:'forme validée', ex:'zraq = bleu'},
  {fr:'Jaune', darija:'sfer', arabic:'صفر', cat:'Couleurs', note:'forme validée', ex:'sfer = jaune'},
  {fr:'Noir', darija:'k7el', arabic:'كحل', cat:'Couleurs', note:'forme validée', ex:'k7el = noir'},
  {fr:'Blanc', darija:'byed', arabic:'بيض', cat:'Couleurs', note:'forme validée', ex:'byed = blanc'},
  {fr:'Gris', darija:'rmadi', arabic:'رمادي', cat:'Couleurs', note:'forme validée', ex:'rmadi = gris'},
  {fr:'Marron', darija:'bouni', arabic:'بوني', cat:'Couleurs', note:'forme validée pour l’app', ex:'bouni = marron'},
  {fr:'Orange', darija:'limouni', arabic:'ليموني', cat:'Couleurs', note:'forme validée', ex:'limouni = orange'},
  {fr:'Rose', darija:'werdi', arabic:'وردي', cat:'Couleurs', note:'forme validée', ex:'werdi = rose'},
  {fr:'Violet', darija:'banafsaji', arabic:'بنفسجي', cat:'Couleurs', note:'forme validée', ex:'banafsaji = violet'},
  {fr:'Doré', darija:'dehbi', arabic:'دهبي', cat:'Couleurs', note:'forme validée', ex:'dehbi = doré'},
  {fr:'Kaki', darija:'kaki', arabic:'كاكي', cat:'Couleurs', note:'forme validée', ex:'kaki = kaki'},
  {fr:'Clair', darija:'fate7', arabic:'فاتح', cat:'Couleurs', note:'nuance de couleur', ex:'zraq fate7 = bleu clair'},
  {fr:'Clair / ouvert', darija:'meftou7', arabic:'مفتوح', cat:'Couleurs', note:'autre nuance de clair', ex:'loun meftou7 = couleur claire / ouverte'},
  {fr:'Foncé', darija:'ghal9', arabic:'غالق', cat:'Couleurs', note:'forme choisie pour l’app', ex:'zraq ghal9 = bleu foncé'},
  {fr:'Couleur', darija:'loun', arabic:'لون', cat:'Couleurs', note:'singulier', ex:'ach had loun? = c’est quelle couleur ?'},
  {fr:'Les couleurs', darija:'lwan', arabic:'لوان', cat:'Couleurs', note:'pluriel', ex:'lwan = les couleurs'}
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
