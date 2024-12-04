// solution 1 : avec if else
function estPair2(nbr) {
  if (nbr % 2 === 0) {
    return `le nombre ${nbr} est pair`;
  } else {
    return `le nombre ${nbr} est impair`;
  }
}
console.log(estPair2(9));

// solution 2 : avec l'operateur ternaire
function estPair3(nbr) {
  return nbr % 2 === 0 ? `le nombre ${nbr} est pair` : `le nombre ${nbr} est impair`;
}
console.log(estPair3(4));
