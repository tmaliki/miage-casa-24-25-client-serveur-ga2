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

  // la fonction trim() permet de nettoyer le texte en supprimant les espaces
  if (nom.trim() === "" || prenom.trim() === "") {
    msgElt.innerText = "Veuillez remplir tous les champs.";
    // OU
    // alert("Veuillez remplir tous les champs.");
  } else {
    msgElt.innerText = "";
    // OU
    // alert("Formulaire validé avec succès.");
  }
});
