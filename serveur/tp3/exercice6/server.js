// importation du framework express
const express = require("express");

// création d'un serveur express
const app = express();

// permet de lire les formats JSON dans le body
app.use(express.json());

// { id:1, designation:"tomate", price: 10.5, qte_stock 100}
let products = [];

// route pour lister tous les produits
app.get("/products/list", (req, res) => {
  res.json(products);
});

// route pour ajouter/créer un nouveau produit
app.post("/products/add", (req, res) => {
  const newProduct = req.body;
  //   { id, designation, price } = req.body;
  products.push(newProduct);

  res.status(201).json({
    message: "Produit ajouté avec succès",
    result: newProduct,
  });
});

// route pour modifier un produit par son id
app.put("/products/update/:id", (req, res) => {
  const productId = req.params.id;
  const updateData = req.body;
  const index = products.findIndex((p) => p.id === parseInt(productId));
  if (index === -1) {
    res.status(404).json({ error: "Product not found" });
  } else {
    products[index] = updateData;
    res.status(202).json({
      message: "Produit modifié avec succès",
      result: updateData,
    });
  }
});

// route pour récuperer les infos d'un produit par son id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// route pour supprimer un produit donné par son id
app.delete("/products/del/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    products = products.filter((p) => p.id !== parseInt(productId));
    res.json({
      message: "Produit supprimé avec succès",
    });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// not found error
app.use((req, res) => {
  res.status(404).json({ error: "Url not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
