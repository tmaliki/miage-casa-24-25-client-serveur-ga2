function comparerChaines(ch1, ch2) {
  if (ch1 === ch2) {
    return "les deux chaines sont identiques";
  } else {
    return "les deux chaines ne sont pas identiques";
  }
}

console.log(comparerChaines("Bonjour", "Bonjour"));
console.log(comparerChaines("Bonjour", "BONJOUR"));

/**
 * Bonus
 * prendre en compte la casse :
 * faire la différence entre majuscule et minuscule
 * toLowerCase : pour formater le text en miniscule
 * toUpperCase : pour formater le text en majuscule
 */

let chaine = "Bonjour tout le monde";
console.log(chaine.toLowerCase()); // en miniscule
console.log(chaine.toUpperCase()); // en majuscule
