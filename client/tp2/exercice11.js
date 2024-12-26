// Tri par insertion dans l'ordre croissant (du plus petit au plus grand)
function triParInsertionAsc(tableau) {
  for (let i = 1; i < tableau.length; i++) {
    let current = tableau[i];
    let j = i - 1;
    while (j >= 0 && tableau[j] > current) {
      tableau[j + 1] = tableau[j];
      j--;
    }
    tableau[j + 1] = current;
  }

  return tableau;
}

// test
console.log(triParInsertionAsc([5, 4, 3, 6, 7, 1, 9]));

// Tri par insertion dans l'ordre d"croissant (du plus grand au plus petit)
function triParInsertionDesc(tableau) {
  for (let i = 1; i < tableau.length; i++) {
    let current = tableau[i];
    let j = i - 1;
    while (j >= 0 && tableau[j] < current) {
      tableau[j + 1] = tableau[j];
      j--;
    }
    tableau[j + 1] = current;
  }

  return tableau;
}

// test
console.log(triParInsertionDesc([5, 4, 3, 6, 7, 1, 9]));
