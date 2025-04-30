const http = require("http");

const server = http.createServer((req, res) => {
  const infos = `
        Méthode : ${req.method},
        URL : ${req.url},
        Headers: ${JSON.stringify(req.headers, null, 2)}
    `;
  res.end(infos);
});

//
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
