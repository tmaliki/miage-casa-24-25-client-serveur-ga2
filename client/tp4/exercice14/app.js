// Première promesse : résolue après 2 secondes avec la valeur "Première pormesse"
const promesse1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Première pormesse résolue");
  }, 2000);
});

// Deuxième promesse : résolue après 2 secondes avec la valeur "Deuxième pormesse"
const promesse2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Deuxième pormesse résolue");
  }, 3000);
});

// Troisième promesse : résolue après 2 secondes avec la valeur "Troisième pormesse"
const promesse3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Troisième pormesse résolue");
  }, 1000);
});

// Test et exécution (utilisation de Promise.all)
Promise.all([promesse1, promesse2, promesse3])
  .then((resultats) => {
    console.log("Toutes les promesses sont résolues : ", resultats);
    console.table(resultats);
  })
  .catch((err) => {
    console.error("Erreur : ", err);
  });
