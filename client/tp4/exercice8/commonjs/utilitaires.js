// fonction flèchée
module.exports.genererNombreAleatoire = (min, max) => {
  if (min >= max) {
    throw new Error("min doit être inférieur à max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// fonction anonyme
module.exports.genererNombreAleatoire1 = function (min, max) {
  if (min >= max) {
    throw new Error("min doit être inférieur à max");
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
