const btnCouleur = document.querySelector("#btnCouleur");
const btnToggle = document.getElementById("btnToggle");

// 1er evenement (Changement de couleur)
btnCouleur.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = "#e0f7fa";
});

// 2ème evenement (Afficher/Masquer)
btnToggle.addEventListener("click", () => {
  const p = document.querySelector("#texte");
  if (p.style.display === "none") {
    p.style.display = "block";
    btnToggle.textContent = "Masquer";
  } else {
    p.style.display = "none";
    btnToggle.textContent = "Afficher";
  }
});
