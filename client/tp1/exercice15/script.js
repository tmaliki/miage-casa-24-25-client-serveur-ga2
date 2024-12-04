// déclaration d'un tableau
const tab1 = [1, 2, 3];
// console.log(typeof tab1);
// console.log(tab1);
// console.table(tab1);

const tab2 = Array("a", "b", "c", "d");
// console.log(typeof tab2);
// console.log(tab2);
// console.table(tab2);

/**
 * Resolution de l'exercice 15
 */
const fruits = ["Orange", "Banane", "Pomme", "Noix de coco", "Kiwi"];
const taille = fruits.length;
// console.log(taille);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[5]);

/**
 * Boucle for
 */
console.log("******* boucle for");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/**
 * Boucle while
 */
console.log("******* boucle while");
let j = 0;
while (j < fruits.length) {
  console.log(fruits[j]);
  j++;
}

/**
 * Boucle do while
 */
console.log("******* boucle do while");
let z = 0;
do {
  console.log(fruits[z]);
  z++;
} while (z < fruits.length);

/**
 * boucle for of
 */
console.log("******* for of");
for (const item of fruits) {
  console.log(item);
}
