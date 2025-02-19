// classe Personnne
class Personne {
  constructor(nom, prenom, dateNaiss) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaiss = dateNaiss;
  }

  afficherInfo() {
    console.log("***************Infos Personne***************");
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("******************************************");
  }
}

// classe Auteur
class Auteur extends Personne {
  constructor(nom, prenom, dateNaiss, matricule, nationalite) {
    super(nom, prenom, dateNaiss);
    this.matricule = matricule;
    this.nationalite = nationalite;
  }

  // Polymorphisme
  afficherInfo() {
    console.log("***************Infos Auteur***************");
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("Matricule : " + this.matricule);
    console.log("Nationalité : " + this.nationalite);
    console.log("******************************************");
  }

  // méthode pour lister les livres d'un auteur
  listeLivresEcrites(bibliotheque) {
    // liste des livres de toute la bibliotheque
    const livres = bibliotheque.listeLivres;

    // let tab = [];
    // for (let i = 0; i < livres.length; i++) {
    //   if (livres[i].auteurs.includes(this.matricule)) {
    //     tab.push(livres[i]);
    //   }
    // }
    // return tab;

    return livres.filter((livre, index) => livre.auteurs.includes(this.matricule));
  }
}

// classe Abonne
class Abonne extends Personne {
  constructor(nom, prenom, dateNaiss, matricule, email) {
    super(nom, prenom, dateNaiss);
    this.matricule = matricule;
    this.email = email;
  }

  // Polymorphisme
  afficherInfo() {
    console.log("****************Infos Abonne****************");
    console.log("Nom : " + this.nom);
    console.log("Prénom : " + this.prenom);
    console.log("Date naissance : " + this.dateNaiss);
    console.log("Matricule : " + this.matricule);
    console.log("Adresse e-mail : " + this.email);
    console.log("******************************************");
  }

  // méthode pour emprunter un livre
  emprunterLivre(livre, bibliotheque) {
    if (livre.estDisponible()) {
      // création d'un objet Emprunt
      const emprunt = new Emprunt(livre, this);

      // ajout de l'emprunt dans la liste des emprunts
      bibliotheque.listeEmprunts.push(emprunt);

      // Mise à jour de la quantité disponible (décrémentation)
      livre.qteDispo--;
    } else {
      console.error("Emprunt impossible, pas de livre disponible");
    }
  }

  // méthode pour rendre un livre
  rendreLivre(livre, bibliotheque) {
    const indexEmprunt = bibliotheque.listeEmprunts.findIndex((item) => item.livre.isbn === livre.isbn);
    if (indexEmprunt !== -1) {
      // ajout de la date de retour
      bibliotheque.listeEmprunts[indexEmprunt].dateRetour = new Date();

      // Mise à jour de la quantité disponible (incrémentation)
      livre.qteDispo++;
    } else {
      console.error("Emprunt introuvable !");
    }
  }

  // méthode pour afficher les livres emprunter d'un abonné
  afficherLivresEmpruntes(bibliotheque) {
    const listeEmpruntsAbonne = bibliotheque.listeEmprunts.filter((emp) => emp.abonne.matricule === this.matricule);

    console.log(`\n********** Liste des emprunts de l'abonée ${this.prenom} ${this.nom} ***********`);
    if (listeEmpruntsAbonne.length) console.table(listeEmpruntsAbonne);
    else console.log("Aucun emprunt trouvé pour cet abonné !");
    console.log("**********************************************************************");
  }
}

// classe Livre
class Livre {
  constructor(isbn, titre, auteurs, anneePub, qteDispo) {
    this.isbn = isbn;
    this.titre = titre;
    this.auteurs = auteurs;
    this.anneePub = anneePub;
    this.qteDispo = qteDispo;
  }

  afficherInfo() {
    console.log("***************Infos Livre*****************");
    console.log("ISBN : " + this.isbn);
    console.log("Titre : " + this.titre);
    console.log("Auteurs : " + this.auteurs);
    console.log("Année de publication : " + this.anneePub);
    console.log("Quantité disponible : " + this.qteDispo);
    console.log("******************************************");
  }

  // méthode pour vérifier la disponibilité
  estDisponible() {
    return this.qteDispo > 0;
  }
}

// classe Emprunt
class Emprunt {
  constructor(livre, abonne) {
    this.livre = livre;
    this.abonne = abonne;
    this.dateEmprunt = new Date();
    this.dateRetour = null;
  }

  afficherDetailsEmprunt() {
    console.log("***************Détail Emprunt *****************");
    console.log("Livre : " + this.livre);
    console.log("Abonne : " + this.abonne);
    console.log("Date emprunt : " + this.dateEmprunt);
    console.log("Date retour : " + this.dateRetour);
    console.log("**********************************************");
  }

  // méthode pour vérifier si un livre emprunter est est en retard
  estEnRetard() {
    // Durée d'enprunt autorisée : 15jous
    const dureeAutorisee = 15;

    // Date actuelle si l'emprunt n'a pas encore été retourné
    const dateDeReference = this.dateRetour ? this.dateRetour : new Date();

    // Calcul de la différence en jours entre la date d'emprunt et la date de retourn ou aujourd'hui
    const differenceEnMillisecondes = dateDeReference - this.dateEmprunt;
    const differenceEnJours = differenceEnMillisecondes / (1000 * 60 * 60 * 24);

    return differenceEnJours > dureeAutorisee;
  }
}

// classe Bibliotheque (classe principale)
class Bibliotheque {
  constructor(nom, adresse) {
    this.nom = nom;
    this.adresse = adresse;
    this.listeAuteurs = [];
    this.listeLivres = [];
    this.listeAbonnes = [];
    this.listeEmprunts = [];
  }

  // méthode pour ajouter un auteur
  ajouterAuteur(auteur) {
    this.listeAuteurs.push(auteur);
    console.log(`L'auteur : ${auteur.matricule} ajouté avec succès`);
  }

  // méthode pour modifier un auteur
  modifierAuteur(auteur) {
    const index = this.listeAuteurs.findIndex((a) => a.matricule === auteur.matricule);
    if (index !== -1) {
      this.listeAuteurs[index] = auteur;
      console.log(`L'auteur : ${auteur.matricule} modifié avec succès`);
    } else {
      console.error("Auteur non trouvé dans la liste !");
    }
  }

  // méthode pour ajouter un Livre
  ajouterLivre(livre) {
    this.listeLivres.push(livre);
    console.log(`Livre : ${livre.isbn} ajouté avec succès`);
    livre.afficherInfo();
  }

  // méthode pour supprimer un Livre
  supprimerLivre(isbn) {
    const findLivre = this.listeLivres.find((l) => l.isbn === isbn);
    if (findLivre) {
      this.listeLivres = this.listeLivres.filter((item) => item.isbn !== isbn);
      console.log(`Livre : ${findLivre.isbn} supprimé avec succès`);
    } else {
      console.error("Livre non trouvé dans la liste !");
    }
  }

  // méthode pour modifier un Livre
  modifierLivre(livre) {
    const index = this.listeLivres.findIndex((l) => l.isbn === livre.isbn);
    if (index !== -1) {
      this.listeLivres[index] = livre;
      console.log(`Livre : ${livre.isbn} modifié avec succès`);
    } else {
      console.error("Livre non trouvé dans la liste !");
    }
  }

  // méthode pour ajouter un Abonne
  ajouterAbonne(abonne) {
    this.listeAbonnes.push(abonne);
    console.log(`Abonné : ${abonne.matricule} ajouté avec succès`);
    abonne.afficherInfo();
  }

  // méthode pour supprimer un Abonne
  supprimerAbonne(matricule) {
    const findAbonne = this.listeAbonnes.find((a) => a.matricule === matricule);
    if (findAbonne) {
      this.listeAbonnes = this.listeAbonnes.filter((item) => item.matricule !== matricule);
      console.log(`Abonné : ${findAbonne.matricule} supprimé avec succès`);
    } else {
      console.error("Abonné non trouvé dans la liste !");
    }
  }

  // méthode pour modifier un Abonne
  modifierAbonne(abonne) {
    const index = this.listeAbonnes.findIndex((a) => a.matricule === abonne.matricule);
    if (index !== -1) {
      this.listeAbonnes[index] = abonne;
      console.log(`Abonne : ${abonne.matricule} modifié avec succès`);
    } else {
      console.error("Abonné non trouvé dans la liste !");
    }
  }

  // méthode pour rechercher un Livre par son titre
  rechercherLivre(titre) {
    const searchResult = this.listeLivres.filter((l) => l.titre.includes(titre));

    if (searchResult.length) {
      console.log(`\n***************Liste des livres trouvés *****************`);
      console.table(searchResult);
      console.log("********************************************************************");
    } else {
      console.error(`Aucun livre trouvé pour !`);
    }
  }

  afficherListeAuteurs() {
    console.log("\n***************Liste des auteurs *****************");
    console.table(this.listeAuteurs);
    console.log("**************************************************");
  }

  afficherListeLivres() {
    console.log("\n***************Liste des livres *****************");
    console.table(this.listeLivres);
    console.log("**************************************************");
  }

  afficherListeAbonnes() {
    console.log("\n***************Liste des abonnés *****************");
    console.table(this.listeAbonnes);
    console.log("**************************************************");
  }

  afficherLivreParAuteur(auteur) {
    const index = this.listeAuteurs.indexOf(auteur);
    if (index !== -1) {
      const livreParAuteur = this.listeLivres.filter((l) => l.auteurs.includes(auteur.matricule));

      if (livreParAuteur.length) {
        console.log(`\n***************Liste des livres de ${auteur.nom} ${auteur.prenom} (${auteur.matricule})  *****************`);
        console.table(livreParAuteur);
        console.log("***************************************************************************");
      } else {
        console.error(`\nAucun livre trouvé pour ${auteur.nom} ${auteur.prenom} (${auteur.matricule}) !`);
      }
    } else {
      console.error("\nAuteur non trouvé dans la liste !");
    }
  }
}

/**
 * Test et exemple d'utilisation
 */

// création d'une instance de la classe personne
const p1 = new Personne("TCHEROU", "Maliki", "1992-01-26");
p1.afficherInfo();

// instancions une bibliotheque
const b1 = new Bibliotheque("Bibliothèque nationale", "Al Saoud");

// création des auteurs
const auteur1 = new Auteur("Hugo", "Victoreeee", "1820-01-24", "AU-00001", "Français");
const auteur2 = new Auteur("Flaubert", "Gustave", "1869-01-24", "AU-00002", "Français");
const auteur3 = new Auteur("Zola", "Émile", "1863-01-24", "AU-00003", "Français");
const auteur4 = new Auteur("Camus", "Albert", "1852-01-24", "AU-00004", "Français");
const auteur5 = new Auteur("Sartre", "Jean-Paul", "1945-01-24", "AU-00005", "Français");
const auteur6 = new Auteur("Molière", "Molière", "1769-01-24", "AU-00006", "Français");
const auteur7 = new Auteur("Shoukri", "Mohamed", "1989-01-24", "AU-00007", "Marocain-Algerien");
console.log(auteur1);
auteur1.afficherInfo();

// ajout des auteurs
b1.ajouterAuteur(auteur1);
b1.ajouterAuteur(auteur2);
b1.ajouterAuteur(auteur7);
b1.ajouterAuteur(auteur3);
b1.ajouterAuteur(auteur5);
b1.ajouterAuteur(auteur6);
b1.ajouterAuteur(auteur4);

// affichages de la liste des auteurs
// console.table(b1.listeAuteurs);
b1.afficherListeAuteurs();

// modification des informations d'un auteur
const editAuteur1 = new Auteur("Hugo", "Victor", "1820-01-24", "AU-00001", "Français");
b1.modifierAuteur(editAuteur1);
b1.afficherListeAuteurs();

// Ajout des livres
const livre1 = new Livre("LIV-00001", "Les misérables", ["AU-00001"], "1862", 50);
const livre2 = new Livre("LIV-00002", "Notre-Dame de Paris", ["AU-00001"], "1831", 20);
const livre3 = new Livre("LIV-00003", "Le dernier jour d'un condamné", ["AU-00001"], "1829", 100);
b1.ajouterLivre(livre1);
b1.ajouterLivre(livre2);
b1.ajouterLivre(livre3);
b1.afficherListeLivres();

// Modifions la quantité disponible du livre LIV-00001
const editLivre1 = new Livre("LIV-00001", "Les misérables", ["AU-00001"], "1862", 150);
b1.modifierLivre(editLivre1);
b1.afficherListeLivres();

// Recherche d'un livre par son titre
b1.rechercherLivre("Le");

// Affichage des livres de l'auteur Victor Hugo
b1.afficherLivreParAuteur(editAuteur1);
b1.afficherLivreParAuteur(auteur2);
