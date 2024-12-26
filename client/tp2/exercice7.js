function arrondirDeuxDecimales(nombre) {
  return parseFloat(nombre.toFixed(2));
}

// test
console.log(arrondirDeuxDecimales(62.2419));
console.log(arrondirDeuxDecimales(15.57969));
