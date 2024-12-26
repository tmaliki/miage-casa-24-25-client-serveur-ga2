/**
 * @param {array} tableau
 * @param {string} ordre "asc" or "desc"
 * @returns
 */
function triParSelection(tableau, ordre = "asc") {
  let echanges = 0; // compteur d'échange
  for (let i = 0; i < tableau.length - 1; i++) {
    let minIndex = i;

    // Trouver l'indice de l'élement le plus petit
    for (let j = i + 1; j < tableau.length; j++) {
      if ((ordre === "asc" && tableau[j] < tableau[minIndex]) || (ordre === "desc" && tableau[j] > tableau[minIndex])) {
        minIndex = j;
      }
    }

    // Echanger si nécessaire
    if (minIndex !== i) {
      //   const temp = tableau[i];
      //   tableau[i] = tableau[minIndex];
      //   tableau[minIndex] = temp;
      // OU
      [tableau[i], tableau[minIndex]] = [tableau[minIndex], tableau[i]];

      // incrementation de l'échange
      echanges++;
    }
  }
  console.log(`Nombre d'echange : ${echanges}`);
  return tableau;
}

// test
console.table(triParSelection([4, 6, 7, 2, 3, 1, 8]));
console.table(triParSelection([4, 6, 7, 2, 3, 1, 8], "desc"));
