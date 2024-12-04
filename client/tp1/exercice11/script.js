function pairImpair(nbr) {
  return nbr % 2 === 0 ? `${nbr} est pair` : `${nbr} est impair`;
}

console.log(pairImpair(15));
console.log(pairImpair(8));
