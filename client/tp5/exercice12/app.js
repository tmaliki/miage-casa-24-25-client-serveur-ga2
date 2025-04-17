const form = document.querySelector("#quizForm");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  // console.log(evt);

  const reponses = {
    q1: "const",
    q2: "toUpperCase",
    q3: "array",
    q4: "//",
    q5: "push",
  };

  let score = 0;

  for (let q in reponses) {
    const choix = document.querySelector(`input[name="${q}"]:checked`);
    if (choix && choix.value === reponses[q]) score++;
  }

  const resultat = document.getElementById("resultat");
  resultat.textContent = `Votre score : ${score}/5`;
});
