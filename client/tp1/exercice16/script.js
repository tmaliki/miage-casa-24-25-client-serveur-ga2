const tableauVide = [];
// const tableauVide2 = new Array();
console.log(tableauVide.length);

// ajoutons 3 élements dans le tableau vide
const sz = tableauVide.push(1, 2, 3);
console.log(sz);
console.table(tableauVide);

// supprimons le deuxième élement du tableau
const extract = tableauVide.splice(1, 1);
console.log(extract); // contient des élements supprimé
console.table(tableauVide); // contient des élements non supprimé
