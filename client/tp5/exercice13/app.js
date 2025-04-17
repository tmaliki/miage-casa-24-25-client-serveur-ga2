let pourcentage = 0;
const barre = document.getElementById("barre");
const btnAugmenter = document.getElementById("augmenter");

btnAugmenter.addEventListener("click", () => {
  if (pourcentage < 100) {
    pourcentage += 10;
    barre.style.width = `${pourcentage}%`;
    barre.textContent = `${pourcentage}%`;
  }
});
