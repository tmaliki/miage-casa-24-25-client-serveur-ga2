const inputElt = document.querySelector("#textId");
const btnElt = document.querySelector("#btnAjout");
const ulElt = document.querySelector("#liste");

btnElt.addEventListener("click", () => {
  const texte = inputElt.value.trim();
  if (texte !== "") {
    // création d'un element li
    const li = document.createElement("li");
    li.textContent = texte;

    // Création d'un element bouton
    const btnDel = document.createElement("button");
    btnDel.textContent = "Supprimer";
    btnDel.style.marginLeft = "10px";
    li.appendChild(btnDel);

    // Evenement de click pour supprimer l'element li
    btnDel.addEventListener("click", () => {
      li.remove();
    });

    ulElt.appendChild(li);
    inputElt.value = ""; // Vider le champ input après l'ajout
  }
});
