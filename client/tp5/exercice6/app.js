const inputElt = document.querySelector("#textId");
const btnElt = document.querySelector("#btnAjout");
const ulElt = document.querySelector("#liste");

btnElt.addEventListener("click", () => {
  const texte = inputElt.value.trim();
  if (texte !== "") {
    // création d'un element li
    const li = document.createElement("li");
    li.textContent = texte;
    ulElt.appendChild(li);
    inputElt.value = ""; // Vider le champ input après l'ajout
  }
});
