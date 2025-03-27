const recupererDonnees = () => {
  const urlTodoList = "https://jsonplaceholder.typicode.com/todos";
  const urlFindRow = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(urlTodoList)
    .then((reponse) => {
      // console.log(reponse);
      if (!reponse.ok) {
        throw new Error(`Erreur HTTP : ${reponse.status}`); // gestion des erreurs HTTP
      }
      return reponse.json(); // conversion des données récupérées au format JSON
    })
    .then((data) => {
      //   console.log("Données reçues : ", data);
      console.table(data);
    })
    .catch((err) => {
      console.error("Une erreur s'est produite", err);
    })
    .finally(() => {
      console.log("Requête terminée.");
    });
};

// Appel de la fonction pour tester
recupererDonnees();
