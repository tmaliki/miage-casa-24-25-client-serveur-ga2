const fruits = ["Pomme", "Banane", "Orange"];
const user = { nom: "Alice", age: 22 };

// récuperation des élements HTML
const arrayLocalSave = document.querySelector("#arrayLocalSaveId");
const arrayLocalRead = document.querySelector("#arrayLocalReadId");
const arrayLocalRemove = document.querySelector("#arrayLocalRemoveId");
const arraySessionSave = document.querySelector("#arraySessionSaveId");
const arraySessionRead = document.querySelector("#arraySessionReadId");
const arraySessionRemove = document.querySelector("#arraySessionRemoveId");
const arrayOutputElt = document.querySelector("#arrayOutput");

const objectLocalSave = document.querySelector("#objectLocalSaveId");
const objectLocalRead = document.querySelector("#objectLocalReadId");
const objectLocalRemove = document.querySelector("#objectLocalRemoveId");
const objectSessionSave = document.querySelector("#objectSessionSaveId");
const objectSessionRead = document.querySelector("#objectSessionReadId");
const objectSessionRemove = document.querySelector("#objectSessionRemoveId");
const obejctOutputElt = document.querySelector("#obejctOutput");

/**
 * Ecoute d'evenement de click sur les boutons du tableau (fruits)
 */
// enregistrement dans le localStorage
arrayLocalSave.addEventListener("click", () => {
  const arrayToString = JSON.stringify(fruits);
  localStorage.setItem("fruits", arrayToString);
  alert("Donnée enregistré dans le localStorage");
});
// enregistrement dans le localStorage
arraySessionSave.addEventListener("click", () => {
  const arrayToString = JSON.stringify(fruits);
  sessionStorage.setItem("fruits", arrayToString);
  alert("Donnée enregistré dans le sessionStorage");
});

// enregistrement dans le localStorage
arrayLocalRead.addEventListener("click", () => {
  const dataString = localStorage.getItem("fruits");
  if (dataString) {
    const dataArray = JSON.parse(dataString);
    arrayOutputElt.innerText = "Fruits (Local) : " + dataArray.join(", ");
  } else {
    alert("Pas de donnée dans localStorage");
  }
});
// enregistrement dans le sessionStorage
arraySessionRead.addEventListener("click", () => {
  const dataString = sessionStorage.getItem("fruits");
  if (dataString) {
    const dataArray = JSON.parse(dataString);
    arrayOutputElt.innerText = "Fruits (session) : " + dataArray.join(", ");
  } else {
    alert("Pas de donnée dans sessionStorage");
  }
});
