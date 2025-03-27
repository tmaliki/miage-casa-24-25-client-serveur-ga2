// Exemple de code asynchrone avec une promesse (Promise)

console.log("Début");

const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Données chargées");
  }, 3000);
});
maPromesse.then((res) => console.log(res));

console.log("Fin");
