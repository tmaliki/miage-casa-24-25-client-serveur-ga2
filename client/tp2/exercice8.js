// Utilisation de la fonction Math.random()
const nbrAlea = Math.random();
// console.log(nbrAlea);

// recupérons un nombre aleatoire de 2 chiffres
const nbrAlea2Chiffres = nbrAlea * 100;
// console.log(nbrAlea2Chiffres);

// utilisation de Math.floor() pour récupérer la partie entière d'un nombre à virgule
// console.log(Math.floor(nbrAlea2Chiffres));

/**
 * Resolution de l'exercice 8
 */
function nombreAleatoire(min, max) {
  const nbrGene = Math.random();
  const nbrMinMax = nbrGene * (max - min + 1) + min;
  return Math.floor(nbrMinMax);
}

// test
console.log(nombreAleatoire(0, 5));
console.log(nombreAleatoire(1, 10));
console.log(nombreAleatoire(1000, 10000));
