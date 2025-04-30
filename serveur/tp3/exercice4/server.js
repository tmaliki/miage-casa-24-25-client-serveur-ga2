// importation du framework express
const express = require("express");

// création d'un serveur express
const app = express();

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
