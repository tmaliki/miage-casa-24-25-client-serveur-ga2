// async function recupererDonnees() {}

const urlTodoList = "https://jsonplaceholder.typicode.com/todos";
const urlFindRow = "https://jsonplaceholder.typicode.com/todos/1";

const recupererDonnees = async () => {
  try {
    const response = await fetch(urlTodoList); // Requête methode GET

    if (!response.ok) {
      // gestion des erreurs HTTP
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.table(data);
  } catch (err) {
    console.error("Une erreur s'est produite : ", err);
  } finally {
    console.log("Requête terminée");
  }
};

recupererDonnees();
