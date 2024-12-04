function calculatrice(n1, n2, op) {
  let res;

  switch (op) {
    case "+":
      res = n1 + n2;
      break;

    case "-":
      res = n1 - n2;
      break;

    case "*":
      res = n1 * n2;
      break;

    case "/":
    case ":":
      res = n2 !== 0 ? n1 / n2 : "Erreur : division par zéro";
      break;

    default:
      res = "Opération invalide";
  }

  return res;
}

const nbr1 = parseFloat(prompt("Entrez le premier nombre :"));
const nbr2 = parseFloat(prompt("Entrez le deuxième nombre :"));
const operation = prompt("Entrez l'opération (+, -, *, /) :");
const resultat = calculatrice(nbr1, nbr2, operation);
console.log(`Résultat : ${resultat}`);
