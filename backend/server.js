import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res, next) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res, next) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
