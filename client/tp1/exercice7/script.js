// solution 1 : avec if else
function estPairDebutant1(nbr) {
  if (nbr % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(estPairDebutant1(9));

// solution 2 : avec l'operateur ternaire
function estPairDebutant2(nbr) {
  return nbr % 2 === 0 ? true : false;
}
console.log(estPairDebutant2(4));

// solution 3 pour les pro
function estPair(nbr) {
  return nbr % 2 === 0;
}
console.log(estPair(14));
