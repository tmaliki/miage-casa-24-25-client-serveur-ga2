function verifyForm() {
  const nom = document.querySelector("#nom").value.trim();
  const prenom = document.querySelector("#prenom").value.trim();
  const email = document.querySelector("#email").value.trim();
  const msgNom = document.getElementById("msgNom");
  const msgPrenom = document.getElementById("msgPrenom");
  const msgEmail = document.getElementById("msgEmail");

  // Réinitialiser les messages d'erreur
  msgNom.textContent = "";
  msgPrenom.textContent = "";
  msgEmail.textContent = "";

  let valide = true;

  if (nom === "") {
    msgNom.textContent = "Le champ nom est requis.";
    valide = false;
  }

  if (prenom === "") {
    msgPrenom.textContent = "Le champ prénom est requis.";
    valide = false;
  }

  if (email === "") {
    msgEmail.textContent = "Le champ email est requis.";
    valide = false;
  }

  if (valide) alert("Formulaire validé avec succès.");

  return valide;
}
