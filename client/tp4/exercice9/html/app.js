import geometrie from "./formules.js";

try {
  console.log("Aire d'un carré de côté 5 :", geometrie.aireCarre(5));
  console.log("Périmetre d'un carré de côté 5 :", geometrie.perimetreCarre(5));

  console.log("Aire d'un carré de côté -6 :", geometrie.aireCarre(-6));
  console.log("Périmetre d'un carré de côté -6 :", geometrie.perimetreCarre(-6));
} catch (error) {
  console.error("Erreur :", error.message);
}
