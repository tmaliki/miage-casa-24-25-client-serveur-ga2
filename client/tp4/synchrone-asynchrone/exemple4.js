// Exemple de code asynchrone avec async/await
// async/await (Syntaxe plus propre pour gérer l'asynchrone)
// L'utilisation de async/await simplifie la gestion des promesses et rend le code plus lisible.

console.log("Début");

async function chargerDonnees() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
  console.log("Données chargées avec succès !");
}
chargerDonnees();

console.log("Fin");
