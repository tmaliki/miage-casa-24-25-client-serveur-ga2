// Importation du module Personne
const { Personne } = require("./personne.js");

// Création des objets personnes
const p1 = new Personne("Alice", 30);
const p2 = new Personne("John", 22);

// test
p1.afficherDetails();
p2.afficherDetails();
