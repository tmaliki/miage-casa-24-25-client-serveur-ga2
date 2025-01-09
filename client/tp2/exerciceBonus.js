const pieces = [1, 2, 5, 10, 20];

function minCoins(montant) {
  let tab = [];

  for (let i = pieces.length - 1; i >= 0; i--) {
    let val = Math.floor(montant / pieces[i]);
    tab.push(val);
    montant = montant % pieces[i];
  }

  return tab.reverse();
}

function minCoins2(montant) {
  let tab = [];

  for (let i = pieces.length - 1; i >= 0; i--) {
    let val = Math.floor(montant / pieces[i]);
    tab.unshift(val);
    montant = montant % pieces[i];
  }

  return tab;
}

// test
console.log(minCoins(150));
console.log(minCoins2(138));
console.log(minCoins2(38));
