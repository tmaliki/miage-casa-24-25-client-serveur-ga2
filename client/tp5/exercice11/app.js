const btnPrev = document.getElementById("prev");
const btnNext = document.querySelector("#next");
const images = document.querySelectorAll(".carousel img");
// console.log(images);

let current = 0;

function updateCarousel(index) {
  images.forEach((img) => img.classList.remove("active"));
  images[index].classList.add("active");
}

// Evenement de click sur le bouton précédent
btnPrev.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateCarousel(current);
});

// Evenement de click sur le bouton suivant
btnNext.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateCarousel(current);
});
