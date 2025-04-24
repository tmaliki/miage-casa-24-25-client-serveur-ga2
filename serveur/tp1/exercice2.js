// importation du module readline
const readline = require("readline");

// création de l'interface de lecture
const rlApp = readline.createInterface({
  input: process.stdin, // entrée
  output: process.stdout, // sortie
});

// test
// rlApp.question("Saisissez votre nom : ", (nom) => {
//   console.log(nom);
//   rlApp.close(); // pour quitter l'interface
// });

// { name: "", phone: ""}
let contacts = [];

// fonction d'ajout d'un contact
function addContacts() {
  rlApp.question("Saisissez le nom du contact : ", (name) => {
    rlApp.question("Saisissez le n° de téléphone : ", (phone) => {
      contacts.push({ name, phone });
      console.log("\nContact ajouté avex succès");
      showContacts(); // affichage de la liste des contacts
    });
  });
}

// fonction d'affichage des contacts
function showContacts() {
  console.log("---------------------------------------------------------");
  console.log("******************* Liste de contacts *******************");
  console.log("---------------------------------------------------------");

  if (contacts.length > 0) {
    // solution 1
    console.table(contacts);

    // solution 2
    // contacts.forEach((c, i) => {
    //   console.log(`${i + 1} - ${c.name} - ${c.phone}`);
    // });
  } else {
    console.log("Aucun contact trouvé !");
  }

  // réaffichage du menu
  main();
}

// fonction pour rechercher un contact
function searchContact() {
  rlApp.question("Saisissez le nom du contact à rechercher : ", (name) => {
    const contact = contacts.find((c) => c.name.toLowerCase() === name.toLowerCase());
    if (contact) {
      console.log("---------------------------------------------------------");
      console.log("******************* Info du contacts ********************");
      console.log("---------------------------------------------------------");
      console.log("Nom contact     : ", contact.name);
      console.log("N° de téléphone : ", contact.phone);
    } else {
      console.log("\nContact non trouvé !");
    }

    // réaffichage du menu
    main();
  });
}

// fonction pour quitter l'application
function exitApp() {
  console.log("\nMerci d'avoir utiliser votre application, au revoir !");
  rlApp.close();
}

// fonction principale
function main() {
  console.log("\nChoisissez un option en saisissant le chiffre correspondant :");
  console.log("1 - Ajouter un contact");
  console.log("2 - Afficher la liste des contacts");
  console.log("3 - Rechercher un contact");
  console.log("4 - Quitter l'application");

  rlApp.question("\nTapez votre choix : ", (choix) => {
    switch (choix) {
      case "1":
        addContacts();
        break;

      case "2":
        showContacts();
        break;

      case "3":
        searchContact();
        break;

      case "4":
        exitApp();
        break;

      default:
        console.log("Choix invalide, veuillez choisir une option valide !");
        main();
    }
  });
}

// exécution de la fonction principale
console.log("****************************************************************");
console.log("*********** Bienvenu sur notre Application de contact **********");
console.log("****************************************************************");
main();
