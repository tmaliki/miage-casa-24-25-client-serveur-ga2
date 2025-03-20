"use strict";

const utilisateur = {
  nom: "John",
  age: 30,
  // adresse: "Casablanca",
};

// définition de la propriété adresse en la rendant non configurable
Object.defineProperty(utilisateur, "adresse", {
  value: "Casablanca",
  writable: true,
  configurable: false, // permet de rendre la propriété non configurable
  enumerable: true, // permet d'ajouter la propriété dans l'objet
});

console.log(utilisateur); // avant suppression
delete utilisateur.adresse;
console.log(utilisateur); // après suppression

function maFonction() {
  console.log("Bonjour ma fonction");
}

// delete maFonction; // en mode strict impossible de supprimer une fonction
