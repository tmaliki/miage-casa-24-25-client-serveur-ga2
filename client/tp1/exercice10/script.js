function verifierAge(age) {
  //   return age >= 18 ? "Accès autorisé" : "Accès interdit";

  // ou

  if (age >= 18) {
    return "Accès autorisé";
  } else {
    return "Accès interdit";
  }
}

// test
console.log(verifierAge(18));
console.log(verifierAge(15));
console.log(verifierAge(22));
