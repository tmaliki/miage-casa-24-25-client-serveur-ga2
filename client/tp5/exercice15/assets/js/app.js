// récuperation des elements span
const heuresId = document.querySelector("#heuresId");
const minutesId = document.querySelector("#minutesId");
const secondesId = document.querySelector("#secondesId");
const millisecondesId = document.querySelector("#millisecondesId");

// récuperation des elements button
const startId = document.querySelector("#startId");
const stopId = document.querySelector("#stopId");
const resetId = document.querySelector("#resetId");

// déclaration des variables
let timerId; // pour stocker l'id du timer
let heures = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

// fonction pour ajouter un 0 lorsqu'il s'agit d'un seul chiffre (0-9)
function numberFormat(nbr) {
  return nbr.toString().padStart(2, "0");
}

// fonctionnalité du bouton start
startId.addEventListener("click", startChrono);
function startChrono() {
  timerId = setInterval(() => {
    heuresId.textContent = numberFormat(heures);
    minutesId.textContent = numberFormat(minutes);
    secondesId.textContent = numberFormat(secondes);
    millisecondesId.textContent = numberFormat(msecondes);

    msecondes += 1;
    if (msecondes >= 100) {
      msecondes = 0; // remettre à zéro les millisecondes
      secondes += 1; // incrementer les secondes
    }

    if (secondes >= 60) {
      secondes = 0;
      minutes += 1;
    }

    if (minutes >= 60) {
      minutes = 0;
      heures += 1;
    }
  }, 10);

  // Désacttivation du bouton start
  startId.setAttribute("disabled", "");
}

// fonctionnalité du bouton stop
stopId.addEventListener("click", stopChrono);
function stopChrono() {
  clearInterval(timerId);

  // Reactivation du bouton start
  startId.removeAttribute("disabled");
}

// fonctionnalité du bouton reset
resetId.addEventListener("click", resetChrono);
function resetChrono() {
  heures = 0;
  minutes = 0;
  secondes = 0;
  msecondes = 0;

  clearInterval(timerId);

  heuresId.textContent = numberFormat(heures);
  minutesId.textContent = numberFormat(minutes);
  secondesId.textContent = numberFormat(secondes);
  millisecondesId.textContent = numberFormat(msecondes);

  // Reactivation du bouton start
  startId.removeAttribute("disabled");
}
