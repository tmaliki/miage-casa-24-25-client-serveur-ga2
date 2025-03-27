const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès !");
    // reject("Echec !");
  }, 2000);
});

// Test et éxecution de la promesse
maPromesse
  .then((result) => {
    console.log("Resulatat en cas de succès : ", result);
  })
  .catch((err) => {
    console.error("Erreur détectée : ", err);
  })
  .finally(() => {
    console.log("Fin de l'exercice 16");
  });
