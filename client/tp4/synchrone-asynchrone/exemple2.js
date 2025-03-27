// Exemple de code asynchrone avec setTimeout()

console.log("Début");

setTimeout(() => {
  console.log("Exécution différée après 3 secondes :");
  for (let i = 0; i < 10; i++) {
    console.log(`Tâche ${i + 1}`);
  }
}, 3000);

console.log("Fin");
