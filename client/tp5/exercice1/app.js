// window est le super objet en js et contient d'autres objets comme :
// console.log(window.alert("Bonjour alert"));
// console.log(alert("Bonjour alert"));

// console.log(window.document);
// console.log(document);

// Selection de l'élement p dont id = eltPId
const eltP = document.getElementById("eltPId");
// console.log(eltP);

// Exemple 1
function changeTexte() {
  eltP.innerText = "Bonjour tout le monde, on vient de changer le text avec l'exemple 1";
}

// Exemple 2
// Selection de l'élement button (selection par le nom de l'element)
// const eltBtn = document.querySelector("button");
// console.log(eltBtn);
// const eltBtns = document.querySelectorAll("button");
// console.log(eltBtns);
// console.log(eltBtns[1]);

const eltBtn = document.querySelector("#btnChangeId");
// console.log(eltBtn);
eltBtn.addEventListener("click", () => {
  eltP.innerText = "Bonjour tout le monde, on vient de changer le text avec l'exemple 2";
});
