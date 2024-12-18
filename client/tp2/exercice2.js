function compterVoyelles(chaine) {
  // liste des voyelles
  const voyelles = "aieouy";

  // ignorons la casse (convertir en miniscule ou majuscule)
  const chaineMiniscule = chaine.toLowerCase();

  // découpons la chaine en miniscule caractère par caractère
  const chaineSplitee = chaineMiniscule.split("");

  // utilisation de la fonction filter
  const voyellesDansLaChaine = chaineSplitee.filter((char) => voyelles.includes(char));
  console.log(voyellesDansLaChaine);

  return `${chaine} contient ${voyellesDansLaChaine.length} voyelles`;
}

// test
// compterVoyelles("Bonjour");
console.log(compterVoyelles("Bonjour"));
console.log(compterVoyelles("Les étudiants de TS2 DI MIAGE CASA"));
