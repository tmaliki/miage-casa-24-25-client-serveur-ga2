function maxEtMin(tableau) {
  return {
    max: Math.max(...tableau),
    min: Math.min(...tableau),
  };
}

// test
console.log(maxEtMin([5, 2, 4, 1, 9, 4]));

/**
 * Utilisation d'une boucle pour trouver le max dans un tableau
 */
function customMax(tab) {
  // supposons que le 1er du tableau est le max
  let maxTab = tab[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > maxTab) {
      maxTab = tab[i];
    }
  }
  return maxTab;
}

function customMin(tab) {
  // supposons que le 1er du tableau est le min
  let minTab = tab[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] < minTab) {
      minTab = tab[i];
    }
  }
  return minTab;
}
