// Récupération des elements HTMl
const inputElt = document.getElementById("inputId");
const btnLocalSave = document.getElementById("localSaveId");
const btnSessionSave = document.getElementById("sessionSaveId");

const btnLocalRead = document.querySelector("#localReadId");
const btnSessionRead = document.querySelector("#sessionReadId");

const btnLocalRemove = document.querySelector("#localRemoveId");
const btnSessionRemove = document.querySelector("#sessionRemoveId");

// récuperation de l'element p par son nom
const outpuElt = document.querySelector("p");

/**
 * Ecoute d'évenement sur les boutons d'enregistrement
 */
// enregistrement dans localStorage
btnLocalSave.addEventListener("click", () => {
  const inputValue = inputElt.value.trim();
  if (inputValue) {
    localStorage.setItem("maValeurLocal", inputValue);
    inputElt.value = "";
  } else {
    alert("Veuillez saisir la valeur du localStorage !");
  }
});

// enregistrement dans sessionStorage
btnSessionSave.addEventListener("click", () => {
  const inputValue = inputElt.value.trim();
  if (inputValue) {
    sessionStorage.setItem("maValeurSession", inputValue);
    inputElt.value = "";
  } else {
    alert("Veuillez saisir la valeur du sessionStorage !");
  }
});

/**
 * Ecout d'évenement de click sur les boutons de lecture
 */
// lecture ou récupetation depuis localStorage
btnLocalRead.addEventListener("click", () => {
  const localValue = localStorage.getItem("maValeurLocal");
  if (localValue) {
    outpuElt.textContent = `Valeur depuis localStorage : ${localValue}`;
  } else {
    alert("Pas de donnée dans le localStorage");
  }
});

// lecture ou récupetation depuis sessionStorage
btnSessionRead.addEventListener("click", () => {
  const sessionValue = sessionStorage.getItem("maValeurSession");
  if (sessionValue) {
    outpuElt.textContent = `Valeur depuis sessionStorage : ${sessionValue}`;
  } else {
    alert("Pas de donnée dans le sessionStorage");
  }
});

/**
 * Ecoute d'evenement de click sur les boutons de suppresion
 */
// localStorage depuis sessionStorage
btnLocalRemove.addEventListener("click", () => {
  if (localStorage.getItem("maValeurLocal")) {
    localStorage.removeItem("maValeurLocal");
  } else {
    alert("Pas donnée à supprimer dans localStorage");
  }
});

// suppression depuis sessionStorage
btnSessionRemove.addEventListener("click", () => {
  if (sessionStorage.getItem("maValeurSession")) {
    sessionStorage.removeItem("maValeurSession");
  } else {
    alert("Pas donnée à supprimer dans sessionStorage");
  }
});
