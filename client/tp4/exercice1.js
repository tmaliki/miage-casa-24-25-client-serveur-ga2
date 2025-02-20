// activation du mode strict en js
"use strict";

// solution 1 : déclaration de la variable de façon globale
// let x;

function testStrictMode() {
  //   x = 20;

  // Solution 2 : déclaration de la variable directement dans la fonction
  //   const x = 20;
  //   var x = 20;
  let x = 20;
  console.log(x);
}

testStrictMode();
