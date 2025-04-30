// importation du framework express
const express = require("express");

// création d'un serveur express
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world !");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
