// console.log("Bonjour tout le monde");

/**
 * exercice de logique sur un palindrome
 */
function inverseChaine(chaine) {
  let chaine_inverse = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    // chaine_inverse = chaine_inverse + chaine[i];
    chaine_inverse += chaine[i];
  }
  return chaine_inverse;
}
console.log(inverseChaine("hello"));

function estPalindromeLogique(chaine) {
  if (chaine == inverseChaine(chaine)) {
    return "Est un palindrome";
  } else {
    return "N'est pas un palindrome";
  }
}
