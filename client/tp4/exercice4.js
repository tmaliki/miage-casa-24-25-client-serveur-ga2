function afficherLongueur(chaine) {
  try {
    console.log("Longueur : ", chaine.length);
  } catch (error) {
    // console.log("Error : ", error);
    console.log("Error name: ", error.name);
    console.log("Error messgae : ", error.message);
    console.log("Error stack : ", error.stack);
    console.log("Error cause : ", error.cause); // disponible dans ES2022
  }
}

// Doit afficher la longueur de la chaine
afficherLongueur("Bonjour tout le monde");

// Doit afficher un message d'erreur sans planter le script
afficherLongueur();
