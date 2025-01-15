// Déclaration d'un classe
class Personne {
  // ajout du contructeur : permettant d'initialiser un objet de la classe Personne
  constructor(n, a) {
    this.nom = n;
    this.age = a;
  }
}

// création d'un =e instnce de la classe Personne
const personne1 = new Personne("Alice", 30);
console.log(personne1);
console.log("Nom : " + personne1.nom);
console.log("Age : " + personne1.age + " ans");
