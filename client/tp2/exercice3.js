function motsPlusLong(phrase) {
  // nétoyage du texte
  const nettoyage = phrase.replace(/[^a-zA-Z0-9\s]/g, "");
  console.log(nettoyage);

  // découpage du texte mot par mot
  const mots = nettoyage.split(" ");
  console.table(mots);

  // comptons chaque mot du tableau
  const tailleMot = mots.map((elt, index) => elt.length);
  console.log(tailleMot);

  // utilisation de la boucle for
  //   let tabTaille = [];
  //   for (let i = 0; i < mots.length; i++) {
  //     const tailleDuMot = mots[i].length;
  //     tabTaille.push(tailleDuMot);
  //   }
  //   console.table(tabTaille);

  // retourner la valeur la plus grande du tableau
  const longueurMax = Math.max(...tailleMot);
  console.log(longueurMax);

  // comparons la longueur maximale avec le mot correspondant dans le tableau
  return mots.filter((mot, index) => mot.length === longueurMax);
}

// test
// motsPlusLong("Bonjour, je m'appelle maliki");
console.table(motsPlusLong("Bonjour, je m'appelle maliki"));
console.table(motsPlusLong("Bonjours, je m'appelle maliki"));
