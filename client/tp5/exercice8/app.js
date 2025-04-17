const btn = document.querySelector("#btnClic");
const span = document.querySelector("#nbrClic");

let compteur = 0;
btn.addEventListener("click", () => {
  compteur++;
  span.textContent = compteur;
});
