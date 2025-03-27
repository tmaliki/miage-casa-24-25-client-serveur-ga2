// Première promesse : retourne 5 après 2 secondes
const promesse1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

// Deuxième promesse : double la valeur reçu par la première promesse
const promesse2 = (valeur) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(valeur * 2);
    }, 1000);
  });
};

// Test et exécution des deux promesses (chaînage des promesses)
promesse1
  .then((response1) => {
    console.log("Première promesse résolue avec : ", response1);
    return promesse2(response1);
  })
  .then((response2) => {
    console.log("Deuxième promesse résolue avec : ", response2);
  })
  .catch((err) => {
    console.error("Erreur : ", err);
  });
