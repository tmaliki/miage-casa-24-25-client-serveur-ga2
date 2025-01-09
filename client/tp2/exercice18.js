function trierCroissant(tab) {
  return [...tab].sort((a, b) => a - b);
}

function trierDecroissant(tab) {
  //   console.log(tab);
  return tab.sort((a, b) => {
    // console.log(a, b);
    return b - a;
  });
}

// test
console.table(trierCroissant([5, 8, 9, 1, 4, 3]));
console.table(trierDecroissant([5, 8, 9, 1, 4, 3]));

/**
 *
 */
const liste = ["Iken", "Redouane", "Fatima", "Abdelkabir"];
console.table(liste.sort());
