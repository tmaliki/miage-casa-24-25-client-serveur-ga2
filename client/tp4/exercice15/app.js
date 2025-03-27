const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Message d'erreur");
  }, 1000);
});

// Test et exécution
maPromesse
  .then((result) => {
    console.log("Succès : ", result);
  })
  .catch((err) => {
    console.error("Erreur détecté", err);
  });
