function mettreAJourHorloge() {
  const maintenant = new Date();
  const heures = String(maintenant.getHours()).padStart(2, "0");
  const minutes = String(maintenant.getMinutes()).padStart(2, "0");
  const secondes = String(maintenant.getSeconds()).padStart(2, "0");
  document.querySelector("#horloge").textContent = `${heures}:${minutes}:${secondes}`;
}

setInterval(mettreAJourHorloge, 1000);
mettreAJourHorloge(); // Initialisation
