// Création d'une promesse
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse resolue avec succès.");
  }, 3000); // 3000 milisecondes => 3 secondes
});

// Exécution et affichage du resultat
maPromesse.then((message) => {
  console.log(message);
});
