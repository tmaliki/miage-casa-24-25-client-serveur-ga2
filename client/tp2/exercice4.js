function inverseMots(phrase) {
  return phrase.split(" ").reverse().join(" ");
}

// test
console.log(inverseMots("JavaScript est un language amusant et intéressant"));
console.log(inverseMots("Apprenez à coder en Javascript"));
