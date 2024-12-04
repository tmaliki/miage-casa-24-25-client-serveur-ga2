const nbr1 = prompt("Veuillez saisir le 1er nombre :");
const nbr2 = prompt("Veuillez saisir le 2ème nombre :");
// console.log(nbr1, nbr2);

if (nbr1 > 0 && nbr2 > 0) {
  console.log("les nombres sont positifs");
} else if (nbr1 < 0 || nbr2 < 0) {
  console.log("Au moins l'un des deux est negatif");
} else {
  console.log("Au moins l'un des deux nombres est nulle");
}
