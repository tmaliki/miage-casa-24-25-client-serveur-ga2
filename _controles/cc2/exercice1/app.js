function filtrerPositifs(tableau) {
  // Vérification si le paramètre est bien un tableau
  if (!Array.isArray(tableau)) {
    console.error("Erreur : Le paramètre doit être un tableau.");
    return [];
  }

  // Création d'un tableau pour stocker les valeurs positives
  let resultats = [];

  // Utilisation d'une boucle for pour parcourir le tableau
  for (let i = 0; i < tableau.length; i++) {
    if (typeof tableau[i] !== "number") {
      console.error(`Erreur : L'élément à l'index ${i} n'est pas un nombre.`);
      continue;
    }
    if (tableau[i] > 0) {
      resultats.push(tableau[i]);
    }
  }

  // Retourner le nouveau tableau contenant les valeurs positives
  return resultats;
}

// Phase de test
console.log(filtrerPositifs([1, -2, 3, 4, -5])); // Résultat attendu : [1, 3, 4]
console.log(filtrerPositifs([-10, -5, -1])); // Résultat attendu : []
console.log(filtrerPositifs([0, 0, 0, 5])); // Résultat attendu : [5]
console.log(filtrerPositifs([])); // Résultat attendu : []
console.log(filtrerPositifs([0, -1, -2, -3])); // Résultat attendu : []
