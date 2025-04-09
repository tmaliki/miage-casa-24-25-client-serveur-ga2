// Sélection des elements
const eltInputNom = document.querySelector("#nomId");
const eltInputPrenom = document.querySelector("#prenomId");
const eltBtn = document.querySelector("#btnId");
const msgElt = document.querySelector("#msgId");

// Ecoute d'evenement de click sur le bouton
eltBtn.addEventListener("click", () => {
  const nom = eltInputNom.value;
  const prenom = eltInputPrenom.value;
  //   console.log(nom, prenom);
});
