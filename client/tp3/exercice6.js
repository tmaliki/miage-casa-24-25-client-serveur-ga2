// Déclaration d'un classe
class Personne {
  // ajout du contructeur : permettant d'initialiser un objet de la classe Personne
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }

  // ajout d'une méthode
  afficherDetails() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans`);
  }
}

// création de la classe Etudiant qui hérite de la classe Personne
class Etudiant extends Personne {
  constructor(n, a, niv) {
    super(n, a);
    this.niveau = niv;
  }
}

// instanciation de la classe Etudiant
const etudiant = new Etudiant("John", 20, "TS2 Di");
etudiant.afficherDetails();
console.log("Niveau de l'étudiant : " + etudiant.niveau);
