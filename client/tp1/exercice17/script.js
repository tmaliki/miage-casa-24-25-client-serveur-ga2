// création d'un objet
const personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 32,
  adresse: [32, "Rue sebta", "Casablanca", 20000],
};

console.log(personne);
console.log("Nom :" + personne.nom);
console.log("Prénom :" + personne.prenom);
console.log("Age :" + personne.age + " ans");
console.table(personne.adresse);
