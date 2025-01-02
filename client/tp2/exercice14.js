function triParAge(data) {
  let size = data.length;

  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (data[j].age > data[j + 1].age) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  return data;
}

// test
const etudiants = [
  { nom: "Dupont", prenom: "Jean", email: "dupont@example.com", age: 32 },
  { nom: "Durand", prenom: "Sophie", email: "sophie@example.com", age: 25 },
  { nom: "Martin", prenom: "Paul", email: "paul@example.com", age: 45 },
  { nom: "Blanc", prenom: "Lucie", email: "lucie@example.com", age: 18 },
];

console.table(triParAge(etudiants));
