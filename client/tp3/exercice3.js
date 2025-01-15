const division = (numerateur, denominateur) => {
  if (denominateur == 0) return `Error : division par zéro impossible`;
  return numerateur / denominateur;
};

// test
console.log(division(9, 3));
console.log(division(45, 0));
