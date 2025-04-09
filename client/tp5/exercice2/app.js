// Séection des élements
const eltP = document.querySelector("#eltPId");
// console.log(eltP);
// eltP.style.color = "red";

const btnElts = document.querySelectorAll("button");
// console.log(btnElts);

// Ecoute de l'evenement de click sur le 1er  bouton pour changer la taille
btnElts[0].addEventListener("click", () => {
  eltP.style.fontSize = "22px";
});

// Ecoute de l'evenement de click sur le 2ème  bouton pour changer la couleur
btnElts[1].addEventListener("click", () => {
  eltP.style.color = "green";
});
