function triBulle(tableau) {
  let size = tableau.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (tableau[j] > tableau[j + 1]) {
        const temp = tableau[j];
        tableau[j] = tableau[j + 1];
        tableau[j + 1] = temp;
      }
    }

    // affichage de chaque etape du tri
    console.log(`Etape ${i + 1} : ${tableau}`);
  }

  return tableau;
}

// test
console.table(triBulle([5, 3, 4, 1, 7, 2]));
