function comparerNombre(a, b) {
  if (a > b) {
    return a + " est plus grand que " + b;
  } else if (a < b) {
    return `${a} est plus petit que ${b}`;
  } else {
    return `${a} et ${b} sont égaux`;
  }
}

// test
console.log(comparerNombre(8, 5));
console.log(comparerNombre(4, 56));
console.log(comparerNombre(12, 12));
