function sommeAvecBoucle(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    // somme = somme + tableau[i];
    somme += tableau[i];
  }
}

function somme(tableau) {
  return tableau.reduce((accumulateur, element) => {
    return accumulateur + element;
  }, 0);
}

// test
console.log(sommeAvecBoucle([5, 4, 2, 1]));
console.log(somme([5, 4, 2, 1]));
