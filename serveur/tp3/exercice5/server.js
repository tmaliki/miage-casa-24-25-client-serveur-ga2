// importation du framework express
const express = require("express");

// création d'un serveur express
const app = express();

const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "Doe", email: "doe@gmail.com" },
  { id: 3, name: "maliki", email: "maliki@gmail.com" },
];

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const userData = users.find((u) => u.id === parseInt(userId));
  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
