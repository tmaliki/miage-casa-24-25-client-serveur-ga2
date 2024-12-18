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

// test de la fonction inverseChaine
// console.log(inverseChaine("hello"));

function estPalindromeLogique(chaine) {
  if (chaine == inverseChaine(chaine)) {
    return `La chaine ${chaine} est un palindrome`;
  } else {
    return `La chaine ${chaine} n'est pas un palindrome`;
  }
}

// test de la fonction estPalindromeLogique
// console.log(estPalindromeLogique("hello"));
// console.log(estPalindromeLogique("ete"));
// console.log(estPalindromeLogique("éte"));
// console.log(estPalindromeLogique("Ete"));

/**
 * Solution de l'exercice 1 avec les fonction prédéfinies de JS
 */

function estPalindrome(chaine) {
  // transformons la chaine en miniscule
  const chaineMiniscule = chaine.toLowerCase();
  console.log(chaineMiniscule);

  // suppression des espaces dans la chaine (Regex : recherche de caractère regulière)
  const chaineSansEspace = chaineMiniscule.replace(/[^a-z0-9]/g, "");
  console.log(chaineSansEspace);

  // utilisation de fonction split qui va retourner un tableau contenant chaque caractère de la chaine
  const chaineSplitee = chaineSansEspace.split("");
  console.table(chaineSplitee);

  // inverser la chaine splitee
  const inverseChaineSplitee = chaineSplitee.reverse();
  console.table(inverseChaineSplitee);

  // rattachons les caractères de la chaine splitee inversée
  const inverseChaine = inverseChaineSplitee.join("");
  console.log(inverseChaine);

  return chaineSansEspace === inverseChaine;
}

// test
// estPalindrome("BONJOUR TOUT LE MONDE");

if (estPalindrome("BONJOUR TOUT LE MONDE")) {
  console.log("Est un palindrome");
} else {
  console.log("N'est pas un palindrome");
}

console.log(estPalindrome("Ete"));
console.log(estPalindrome("éte"));
