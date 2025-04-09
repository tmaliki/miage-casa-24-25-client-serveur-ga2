// Récuperation des elements
const eltInput = document.querySelector("#pwdId");
const btnElt = document.getElementById("btnId");

// Ecoute de l'evenement de click sur le bouton
btnElt.addEventListener("click", () => {
  if (eltInput.type === "password") {
    eltInput.type = "text";
    btnElt.innerText = "Masquer";
  } else {
    eltInput.type = "password";
    btnElt.innerText = "Afficher";
  }
});
