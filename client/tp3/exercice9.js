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

  // Méthode static
  // const data = { nom: "Maliki", age: 30 }
  static creerPersonne(data) {
    // return new Personne(data.nom, data.age);
    return new this(data.nom, data.age);
  }
}

// utilisation d'une méthode staitque
const data = { nom: "Alice", age: 30 };
const alice = Personne.creerPersonne(data);
alice.afficherDetails();
