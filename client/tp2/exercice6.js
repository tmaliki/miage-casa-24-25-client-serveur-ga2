// fonction flechée
const estEntier = (nombre) => {
  return Number.isInteger(nombre);
};

// fonction nommée
function estEntier2(nombre) {
  return Number.isInteger(nombre);
}

// test
console.log(estEntier(3.14));
console.log(estEntier(50));
console.log(estEntier2(32));
