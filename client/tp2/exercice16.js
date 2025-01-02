function carres(tableau) {
  return tableau.map((elt, index) => elt ** 2);
}

function carres2(tableau) {
  const tabCarre = [];
  tableau.forEach((elt, index) => {
    tabCarre.push(elt ** 2);
  });
  return tabCarre;
}

// test
console.log(carres([5, 2, 6, 4, 8, 3]));
console.log(carres2([5, 2, 6, 4, 8, 3]));
