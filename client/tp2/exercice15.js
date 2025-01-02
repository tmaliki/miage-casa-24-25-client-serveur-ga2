function filtrerPairs(tableau) {
  return tableau.filter((elt) => elt % 2 === 0);
}

// test
console.log(filtrerPairs([5, 4, 2, 1, 8, 3, 7]));
