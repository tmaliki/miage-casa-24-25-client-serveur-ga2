function compterOccurencesBoucle(tab, elt) {
  let compteur = 0;
  for (let i = 0; i < tab.length; i++) {
    if (elt === tab[i]) compteur++;
  }
  return compteur;
}

const elt = 4;
const tab = [5, 7, 4, 9, 6, 4, 6, 2, 4, 3];
const resultat = compterOccurencesBoucle(tab, elt);
console.log(`L'element ${elt} apparait ${resultat} fois`);

/**
 * solution avec la fonction reduce
 */

function compterOccurences(tab, elt) {
  //   return tab.reduce((compteur, currentElt) => (elt === currentElt ? compteur + 1 : compteur), 0);

  return tab.reduce((compteur, currentElt) => {
    return elt === currentElt ? compteur + 1 : compteur;
  }, 0);
}

// test
const elt2 = 6;
console.log(compterOccurences(tab, elt2));
