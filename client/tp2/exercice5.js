function remplacerEspaces(chaine) {
  // solution 1 : avec replaceAll
  //   return chaine.replaceAll(" ", "-");

  // solution 2 : avec replace et regex
  return chaine.replace(/ /g, "-");
}

// test
console.log(remplacerEspaces("Bonjour tout le monde"));
