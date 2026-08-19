// Animaux — Darija Rabat / Salé
// Liste validée ensemble, avec les corrections d'Inès.
const ANIMALS_DATA = [
  {fr:'Crocodile', darija:'timsa7', arabic:'تمساح', cat:'Animaux', note:'animal', ex:'timsa7 = crocodile'},
  {fr:'Fourmi', darija:'nemla', arabic:'نملة', cat:'Animaux', note:'animal', ex:'nemla = fourmi'},
  {fr:'Ours', darija:'dobb', arabic:'دب', cat:'Animaux', note:'animal', ex:'dobb = ours'},
  {fr:'Abeille', darija:'ne7la', arabic:'نحلة', cat:'Animaux', note:'animal', ex:'ne7la = abeille'},
  {fr:'Coccinelle', darija:'cocinelle', arabic:'كوسينيل', cat:'Animaux', note:'forme retenue par Inès', ex:'cocinelle = coccinelle'},
  {fr:'Papillon', darija:'faracha', arabic:'فراشة', cat:'Animaux', note:'animal', ex:'faracha = papillon'},
  {fr:'Chameau', darija:'jmel', arabic:'جمل', cat:'Animaux', note:'animal', ex:'jmel = chameau'},
  {fr:'Chat', darija:'9ett', arabic:'قط', cat:'Animaux', note:'animal', ex:'9ett = chat'},
  {fr:'Chatte', darija:'9etta', arabic:'قطة', cat:'Animaux', note:'animal', ex:'9etta = chatte'},
  {fr:'Poulet', darija:'djaj', arabic:'دجاج', cat:'Animaux', note:'animal / poulet', ex:'djaj = poulet'},
  {fr:'Poule', darija:'djaja', arabic:'دجاجة', cat:'Animaux', note:'animal', ex:'djaja = poule'},
  {fr:'Cafard', darija:'serra9 zzit', arabic:'سراق الزيت', cat:'Animaux', note:'animal', ex:'serra9 zzit = cafard'},
  {fr:'Vache', darija:'begra', arabic:'بقرة', cat:'Animaux', note:'animal', ex:'begra = vache'},
  {fr:'Chien', darija:'kelb', arabic:'كلب', cat:'Animaux', note:'animal', ex:'kelb = chien'},
  {fr:'Dauphin', darija:'delfin', arabic:'دلفين', cat:'Animaux', note:'animal', ex:'delfin = dauphin'},
  {fr:'Âne', darija:'7mar', arabic:'حمار', cat:'Animaux', note:'animal', ex:'7mar = âne'},
  {fr:'Canard', darija:'betta', arabic:'بطة', cat:'Animaux', note:'animal', ex:'betta = canard'},
  {fr:'Éléphant', darija:'fil', arabic:'فيل', cat:'Animaux', note:'animal', ex:'fil = éléphant'},
  {fr:'Poisson', darija:'7out', arabic:'حوت', cat:'Animaux', note:'animal', ex:'7out = poisson'},
  {fr:'Mouche', darija:'debbana', arabic:'دبانة', cat:'Animaux', note:'corrigé : mouche et non « voler »', ex:'debbana = mouche'},
  {fr:'Girafe', darija:'zarafa', arabic:'زرافة', cat:'Animaux', note:'animal', ex:'zarafa = girafe'},
  {fr:'Chèvre', darija:'me3za', arabic:'معزة', cat:'Animaux', note:'animal', ex:'me3za = chèvre'},
  {fr:'Cheval', darija:'3awd', arabic:'عود', cat:'Animaux', note:'animal', ex:'3awd = cheval'},
  {fr:'Pou / poux', darija:'gmel', arabic:'قمل', cat:'Animaux', note:'animal', ex:'gmel = pou / poux'},
  {fr:'Lion', darija:'sbe3', arabic:'سبع', cat:'Animaux', note:'animal', ex:'sbe3 = lion'},
  {fr:'Lézard', darija:'bobris', arabic:'بوبريص', cat:'Animaux', note:'animal', ex:'bobris = lézard'},
  {fr:'Singe', darija:'9erd', arabic:'قرد', cat:'Animaux', note:'animal', ex:'9erd = singe'},
  {fr:'Souris', darija:'far', arabic:'فار', cat:'Animaux', note:'animal', ex:'far = souris'},
  {fr:'Perroquet', darija:'bebbgha', arabic:'ببغاء', cat:'Animaux', note:'animal', ex:'bebbgha = perroquet'},
  {fr:'Cochon', darija:'7ellouf', arabic:'حلوف', cat:'Animaux', note:'animal', ex:'7ellouf = cochon'},
  {fr:'Pigeon', darija:'7mam', arabic:'حمام', cat:'Animaux', note:'animal', ex:'7mam = pigeon'},
  {fr:'Lapin', darija:'9nia', arabic:'قنية', cat:'Animaux', note:'animal', ex:'9nia = lapin'},
  {fr:'Scorpion', darija:'3agrab', arabic:'عقرب', cat:'Animaux', note:'forme corrigée par Inès', ex:'3agrab = scorpion'},
  {fr:'Mouton', darija:'7awli', arabic:'حولي', cat:'Animaux', note:'animal', ex:'7awli = mouton'},
  {fr:'Crevette', darija:'crevette', arabic:'كروفيت', cat:'Animaux', note:'forme retenue par Inès', ex:'crevette = crevette'},
  {fr:'Escargot', darija:'bebbouch', arabic:'ببوش', cat:'Animaux', note:'animal', ex:'bebbouch = escargot'},
  {fr:'Serpent', darija:'lef3a', arabic:'لفعى', cat:'Animaux', note:'animal', ex:'lef3a = serpent'},
  {fr:'Araignée', darija:'rtila', arabic:'رتيلة', cat:'Animaux', note:'animal', ex:'rtila = araignée'},
  {fr:'Tortue', darija:'fekroun', arabic:'فكرون', cat:'Animaux', note:'animal', ex:'fekroun = tortue'},
  {fr:'Loup', darija:'dib', arabic:'ديب', cat:'Animaux', note:'forme confirmée par Inès', ex:'dib = loup'},
  {fr:'Ver', darija:'douda', arabic:'دودة', cat:'Animaux', note:'animal', ex:'douda = ver'}
];

ANIMALS_DATA.forEach(item => {
  const idx = DATA.findIndex(x => x.fr === item.fr);
  if (idx >= 0) DATA[idx] = item;
  else DATA.push(item);
});

if (typeof renderCats === 'function') renderCats();
if (typeof renderCards === 'function') renderCards();
if (typeof renderFavs === 'function') renderFavs();
