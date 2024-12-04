function findPrimes(start, end) {
  let primes = [];

  for (let currentNumber = start; currentNumber <= end; currentNumber++) {
    let isPrime = true;

    if (currentNumber < 2) isPrime = false;

    for (let divider = 2; divider <= Math.sqrt(currentNumber); divider++) {
      if (currentNumber % divider === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(currentNumber);
  }

  return primes;
}

const debut = parseFloat(prompt("Entrez le nombre :"));
const fin = parseFloat(prompt("Entrez le nombre :"));
console.log(`Nombres premiers entre ${debut} et ${fin} :`, findPrimes(debut, fin));
