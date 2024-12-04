// création d'un objet
const personne = {
  nom: "TCHEROU",
  prenom: "Maliki",
  age: 32,
  adresse: [32, "Rue sebta", "Casablanca", 20000],
  message: function () {
    console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans`);
  },
};

// affichage du message
personne.message();
