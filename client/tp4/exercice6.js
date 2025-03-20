function lireFichier(nomFichier) {
  try {
    if (nomFichier !== "data.txt") {
      throw new Error("Fichier introuvable !");
    }
    console.log("Lecture du fichier");
  } catch (error) {
    console.error("Erreur : ", error.message);
  } finally {
    // peut importe l'issue de l'exécution afficher ça
    console.log("Fermerture du fichier.");
  }
}

// test
lireFichier("data.txt"); // lecture reussie et le fichier est fermé
lireFichier("autre.txt"); // Erreur capturé, mais le fichier est fermé
