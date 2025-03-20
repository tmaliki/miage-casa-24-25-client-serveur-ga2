import { addition, soustraction, multiplication, division } from "./operations.js";

try {
  console.log("Addition de (6 + 7)", addition(6, 7));
  console.log("Soustraction de (22 - 13)", soustraction(22, 13));
  console.log("Multiplication de (6 x 7)", multiplication(6, 7));

  // pour la divsion
  console.log("Division de (9 / 2)", division(9, 2));
  console.log("Division de (9 / 0)", division(9, 0));
} catch (error) {
  console.error("Erreur détecté : ", error.message);
}
