// Déclaration d'un classe
class Personne {
  #age; // propriété privée

  // ajout du contructeur : permettant d'initialiser un objet de la classe Personne
  constructor(n, a) {
    this.nom = n;
    this.#age = a;
  }

  // Méthode pour récupérer l'age
  getAge() {
    return this.#age;
  }

  // Méthode pour définir l'age
  setAge(nouvelAge) {
    if (nouvelAge >= 0) this.#age = nouvelAge;
    else console.error(`Erreur : l'age doit être positif`);
  }

  // ajout d'une méthode
  afficherDetails() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.getAge()} ans`);
  }
}

// création d'un =e instnce de la classe Personne
const alice = new Personne("Alice", 30);
alice.afficherDetails();

// Modification de l'age
alice.setAge(31);
alice.afficherDetails();

// En cas d'un age négatif
alice.setAge(-9);
