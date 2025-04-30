// importation du module http de node.js
const http = require("http");

// création du serveur
// req : request => pour les demandes vers le serveur
// res : response
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("Hello world !");
});

// Démarrage du serveur qui écoute sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
