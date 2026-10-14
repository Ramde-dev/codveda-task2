
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "Laptop", price: 850000 },
  { id: 2, name: "Keyboard", price: 25000 }
];

let nextId = 3;

// Home route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Codveda Task 2 REST API!");
});

// READ: Get all products
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

// READ: Get one product by ID
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
});

// CREATE: Add a new product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      error: "A valid product name and non-negative numeric price are required"
    });
  }

  const newProduct = {
    id: nextId++,
    name: name.trim(),
    price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// UPDATE: Update an existing product
app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { name, price } = req.body;

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof price !== "number" ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      error: "A valid product name and non-negative numeric price are required"
    });
  }

  product.name = name.trim();
  product.price = price;

  res.status(200).json(product);
});

// DELETE: Remove a product
app.delete("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1)[0];

  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
