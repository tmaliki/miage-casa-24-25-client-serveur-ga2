// fonction anonyme
// export default function genererNombreAleatoire(min, max) {
//   if (min >= max) {
//     throw new Error("min doit être inférieur à max");
//   }
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// fonction flèchée
const genererNombreAleatoire = (min, max) => {
  if (min >= max) {
    throw new Error("min doit être inférieur à max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default genererNombreAleatoire;
