function diviser(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division par zéro impossible !");
    }
    console.log(`Résultat : ${a} / ${b} = ${(a / b).toFixed(2)}`);
  } catch (error) {
    console.error("Erreur : ", error.message);
  }
}

// test
diviser(17, 3);
diviser(50, 0); // Doit afficher l'erreur de l'exception
