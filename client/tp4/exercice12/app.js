// Déclaration de la variable de test
let success = true; // Changez à false pour tester le rejet

// Création de la promesse
const maPromesse = new Promise(maPromesseFn);
function maPromesseFn(resolve, reject) {
  setTimeout(() => {
    if (success) {
      resolve("Promesse résolue.");
    } else {
      reject("Promesse rejetée.");
    }
  }, 2000); // Délai de 2 secondes
}

// Test et exécution de la promesse
maPromesse
  .then((message) => {
    console.log("Succès : ", message);
  })
  .catch((err) => {
    console.error("Erreur : ", err);
  });
