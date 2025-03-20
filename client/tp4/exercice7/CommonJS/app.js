// Utilisation méthode 1
const op = require("./operations");

try {
  console.log("Addition de (6 + 7) = ", op.addition(6, 7));
  console.log("Soustraction de (22 - 13) = ", op.soustraction(22, 13));
  console.log("Multiplication de (6 x 7) = ", op.multiplication(6, 7));

  // pour la divsion
  console.log("Division de (9 / 2) = ", op.division(9, 2));
  console.log("Division de (9 / 0) = ", op.division(9, 0));
} catch (error) {
  console.error("Erreur détecté : ", error.message);
}

// Utilisation méthode 1
