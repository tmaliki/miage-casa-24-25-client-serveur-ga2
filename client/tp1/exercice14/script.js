const month = prompt("Veuillez saisir le numéro du mois de l'année :");

switch (parseInt(month)) {
  case 1:
  case 2:
  case 12:
    console.log("Hiver");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Printemps");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Eté");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Automne");
    break;

  default:
    console.log("Numéro du mois invalide");
    break;
}
