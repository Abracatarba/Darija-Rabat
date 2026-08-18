// Vocabulaire Darija Rabat — ajouts progressifs
// Mise à jour de publication : 18/08/2026
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
  {fr:'Les couleurs', darija:'lwan', arabic:'لوان', cat:'Couleurs', note:'pluriel', ex:'lwan = les couleurs'},

  {fr:'Je t’aime', darija:'kanbghik', arabic:'كنبغيك', cat:'Conversation', note:'forme validée', ex:'kanbghik = je t’aime'},
  {fr:'Tu me manques', darija:'twe77echtek', arabic:'توحشتك', cat:'Conversation', note:'forme validée', ex:'twe77echtek = tu me manques'},
  {fr:'D’accord', darija:'wakha', arabic:'واخا', cat:'Conversation', note:'forme validée', ex:'wakha = d’accord'},
  {fr:'Pas maintenant', darija:'machi daba', arabic:'ماشي دابا', cat:'Temps', note:'forme validée', ex:'machi daba = pas maintenant'},
  {fr:'Et', darija:'w', arabic:'و', cat:'Conversation', note:'forme validée', ex:'ana w nta = moi et toi'},
  {fr:'Pas moi / ce n’est pas moi', darija:'machi ana', arabic:'ماشي أنا', cat:'Conversation', note:'forme validée', ex:'machi ana = ce n’est pas moi'},
  {fr:'J’ai fini', darija:'salit', arabic:'ساليت', cat:'Conversation', note:'forme validée', ex:'salit = j’ai fini'},
  {fr:'Je n’ai pas fini', darija:'ma salitch', arabic:'ما ساليتش', cat:'Conversation', note:'forme validée', ex:'ma salitch = je n’ai pas fini'},
  {fr:'Beau', darija:'zwin', arabic:'زوين', cat:'Conversation', note:'masculin', ex:'zwin = beau'},
  {fr:'Belle', darija:'zwina', arabic:'زوينة', cat:'Conversation', note:'féminin', ex:'zwina = belle'},
  {fr:'Laid', darija:'khayb', arabic:'خايب', cat:'Conversation', note:'masculin', ex:'khayb = laid'},
  {fr:'Laide', darija:'khayba', arabic:'خايبة', cat:'Conversation', note:'féminin', ex:'khayba = laide'},
  {fr:'Bienvenue', darija:'mer7ba', arabic:'مرحبا', cat:'Politesse', note:'forme validée', ex:'mer7ba = bienvenue'},
  {fr:'Prendre', darija:'khda', arabic:'خدا', cat:'Verbes', note:'forme validée', ex:'khda = prendre'},
  {fr:'Donne-moi', darija:'3tini', arabic:'عطيني', cat:'Conversation', note:'forme validée', ex:'3tini = donne-moi'},
  {fr:'Je sais', darija:'3aref', arabic:'عارف', cat:'Conversation', note:'forme validée', ex:'3aref = je sais'},
  {fr:'Je ne sais pas', darija:'ma 3arefch', arabic:'ما عارفش', cat:'Conversation', note:'forme validée', ex:'ma 3arefch = je ne sais pas'},
  {fr:'J’ai oublié', darija:'nsit', arabic:'نسيت', cat:'Conversation', note:'forme validée', ex:'nsit = j’ai oublié'},
  {fr:'Je dois y aller', darija:'khasni nmchi', arabic:'خاصني نمشي', cat:'Déplacements', note:'forme validée', ex:'khasni nmchi = je dois y aller'},
  {fr:'C’est ton tour', darija:'noubtek', arabic:'نوبتك', cat:'Conversation', note:'forme validée', ex:'noubtek = c’est ton tour'},
  {fr:'C’est mon tour', darija:'noubti', arabic:'نوبتي', cat:'Conversation', note:'forme validée', ex:'noubti = c’est mon tour'},
  {fr:'Je suis fatigué(e)', darija:'3yit', arabic:'عييت', cat:'Besoins', note:'forme validée', ex:'3yit = je suis fatigué(e)'},
  {fr:'Félicitations', darija:'mabrouk', arabic:'مبروك', cat:'Politesse', note:'forme validée', ex:'mabrouk = félicitations'},
  {fr:'Je cherche', darija:'kan9elleb 3la', arabic:'كنقلب على', cat:'Conversation', note:'forme validée pour l’app', ex:'kan9elleb 3la... = je cherche...'},
  {fr:'C’est bon / ça suffit', darija:'safi', arabic:'صافي', cat:'Conversation', note:'forme validée', ex:'safi = c’est bon / ça suffit'},
  {fr:'Doucement', darija:'bchwia', arabic:'بشوية', cat:'Conversation', note:'forme validée', ex:'bchwia = doucement'},
  {fr:'Rapidement', darija:'bzerba', arabic:'بالزربة', cat:'Conversation', note:'forme validée', ex:'bzerba = rapidement'},
  {fr:'Peut-être', darija:'ymken', arabic:'يمكن', cat:'Conversation', note:'forme validée', ex:'ymken = peut-être'},
  {fr:'Bien sûr', darija:'akid', arabic:'أكيد', cat:'Conversation', note:'forme validée', ex:'akid = bien sûr'},
  {fr:'J’ai un problème', darija:'3ndi mochkil', arabic:'عندي مشكل', cat:'Conversation', note:'forme validée', ex:'3ndi mochkil = j’ai un problème'},
  {fr:'Qu’en penses-tu ?', darija:'achno ban lik?', arabic:'اشنو بان ليك؟', cat:'Questions', note:'forme validée pour l’app', ex:'achno ban lik? = qu’en penses-tu ?'},

  {fr:'Délicieux', darija:'bnin', arabic:'بنين', cat:'Nourriture', note:'masculin', ex:'bnin = délicieux'},
  {fr:'Délicieuse', darija:'bnina', arabic:'بنينة', cat:'Nourriture', note:'féminin', ex:'bnina = délicieuse'},
  {fr:'Tu comprends ?', darija:'fhemti', arabic:'فهمتي', cat:'Conversation', note:'forme validée pour l’app', ex:'fhemti? = tu comprends ?'},
  {fr:'Regarde ! (garçon)', darija:'chouf', arabic:'شوف', cat:'Conversation', note:'masculin', ex:'chouf = regarde !'},
  {fr:'Regarde ! (fille)', darija:'choufi', arabic:'شوفي', cat:'Conversation', note:'féminin', ex:'choufi = regarde !'},
  {fr:'Tu m’as compris ?', darija:'fhemtini?', arabic:'فهمتيني؟', cat:'Conversation', note:'forme validée', ex:'fhemtini? = tu m’as compris ?'},
  {fr:'Accepter', darija:'9bel', arabic:'قبل', cat:'Verbes', note:'forme validée', ex:'9bel = accepter'},
  {fr:'Répondre', darija:'jawab', arabic:'جاوب', cat:'Verbes', note:'forme validée pour l’app', ex:'jawab = répondre'},
  {fr:'Conseiller', darija:'nse7', arabic:'نصح', cat:'Verbes', note:'forme validée', ex:'nse7 = conseiller'},
  {fr:'Poser une question', darija:'sewwel', arabic:'سول', cat:'Verbes', note:'forme validée pour l’app', ex:'sewwel = poser une question'},
  {fr:'Demander', darija:'tleb', arabic:'طلب', cat:'Verbes', note:'forme validée', ex:'tleb = demander'},
  {fr:'Naître', darija:'tewled', arabic:'تولد', cat:'Verbes', note:'forme validée pour l’app', ex:'tewled = naître'},
  {fr:'Emprunter', darija:'tsellef', arabic:'تسلف', cat:'Verbes', note:'forme validée', ex:'tsellef = emprunter'},
  {fr:'Respirer', darija:'tneffes', arabic:'تنفس', cat:'Verbes', note:'forme validée', ex:'tneffes = respirer'},
  {fr:'Apporter', darija:'jab', arabic:'جاب', cat:'Verbes', note:'forme validée', ex:'jab = apporter'},
  {fr:'Acheter', darija:'chra', arabic:'شرا', cat:'Verbes', note:'forme validée', ex:'chra = acheter'},
  {fr:'Changer', darija:'beddel', arabic:'بدل', cat:'Verbes', note:'forme validée', ex:'beddel = changer'},
  {fr:'Choisir', darija:'khtar', arabic:'ختار', cat:'Verbes', note:'forme validée', ex:'khtar = choisir'},
  {fr:'Nettoyer', darija:'ne9a', arabic:'نقى', cat:'Verbes', note:'forme validée pour l’app', ex:'ne9a = nettoyer'},
  {fr:'Fermer', darija:'sedd', arabic:'سد', cat:'Verbes', note:'forme validée', ex:'sedd = fermer'},
  {fr:'Peigner', darija:'mchet', arabic:'مشط', cat:'Verbes', note:'forme validée', ex:'mchet = peigner'},
  {fr:'Venir', darija:'ja', arabic:'جا', cat:'Verbes', note:'forme validée', ex:'ja = venir'},
  {fr:'Se concentrer', darija:'rekkez', arabic:'ركز', cat:'Verbes', note:'forme validée', ex:'rekkez = se concentrer'},
  {fr:'Féliciter', darija:'barek', arabic:'بارك', cat:'Verbes', note:'forme validée pour l’app', ex:'barek = féliciter'},
  {fr:'Compter', darija:'7seb', arabic:'حسب', cat:'Verbes', note:'forme validée', ex:'7seb = compter'},
  {fr:'Pleurer', darija:'bka', arabic:'بكا', cat:'Verbes', note:'forme validée', ex:'bka = pleurer'},
  {fr:'Maudire', darija:'n3el', arabic:'نعل', cat:'Verbes', note:'forme validée', ex:'n3el = maudire'},
  {fr:'Couper', darija:'9te3', arabic:'قطع', cat:'Verbes', note:'forme validée', ex:'9te3 = couper'},
  {fr:'Danser', darija:'chte7', arabic:'شطح', cat:'Verbes', note:'forme validée', ex:'chte7 = danser'},
  {fr:'Mourir', darija:'mat', arabic:'مات', cat:'Verbes', note:'forme validée', ex:'mat = mourir'},
  {fr:'Dessiner', darija:'rsem', arabic:'رسم', cat:'Verbes', note:'forme validée', ex:'rsem = dessiner'},
  {fr:'Rêver', darija:'7lem', arabic:'حلم', cat:'Verbes', note:'forme validée', ex:'7lem = rêver'},
  {fr:'Boire', darija:'chreb', arabic:'شرب', cat:'Verbes', note:'forme validée', ex:'chreb = boire'},
  {fr:'Mériter', darija:'sate7e9', arabic:'استحق', cat:'Verbes', note:'forme validée pour l’app', ex:'sate7e9 = mériter'},
  {fr:'Diversifier', darija:'nawwe3', arabic:'نوع', cat:'Verbes', note:'forme validée', ex:'nawwe3 = diversifier'},
  {fr:'Douter', darija:'chekk', arabic:'شك', cat:'Verbes', note:'forme validée', ex:'chekk = douter'},
  {fr:'Manger', darija:'kla', arabic:'كلا', cat:'Verbes', note:'forme validée', ex:'kla = manger'},
  {fr:'Encourager', darija:'chejje3', arabic:'شجع', cat:'Verbes', note:'forme validée', ex:'chejje3 = encourager'},
  {fr:'Entrer', darija:'dkhel', arabic:'دخل', cat:'Verbes', note:'forme validée', ex:'dkhel = entrer'}
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
