function trouverPremierPairBoucle1(tab) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      return tab[i];
    }
  }
  return null;
}

// test
// console.log(trouverPremierPairBoucle1([7, 5, 4, 3, 6, 2]));

function trouverPremierPairBoucle2(tab) {
  let pair = null;

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      pair = tab[i];
      // return;
      break;
    }
  }

  return pair;
}

function trouverPremierPairBoucle3(tab) {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 !== 0) {
      continue;
      // tant que la condition est vérifie continuer
      // incrémenter i et reprennez la boucle
    }
    return tab[i];
  }

  return null;
}

/**
 * solution avec la fonction  find
 */
function trouverPremierPair(tab) {
  //   return tab.find((elt, index) => elt % 2 === 0);
  return tab.find((elt, index) => {
    return elt % 2 === 0;
  });
}
