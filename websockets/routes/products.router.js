import { Router } from "express";
import ProductManager from "../src/ProductManager.js";

const productsRoute = Router();

const productManager1 = new ProductManager("./data/Products.json");

productsRoute.get("/", (req, res) => {
  let products = productManager1.getProducts();
  if (req.query.limit && !isNaN(parseInt(req.query.limit))) {
    products = products.slice(0, parseInt(req.query.limit));
  }
  return res.status(200).json({ products });
});

productsRoute.get("/:pid", (req, res) => {
  if (req.params.pid && !isNaN(parseInt(req.params.pid))) {
    const product = productManager1.getProductById(parseInt(req.params.pid));
    return res.json({ product });
  } else {
    return res.status(400).json({ error: "Insert a valid numeric id!" });
  }
});

productsRoute.post("/", async (req, res) => {
  if (req.body) {
    const product = await productManager1.addProduct(req.body);
    return res.json({ product });
  } else {
    return res.status(400).json({ error: "Insert a valid body!" });
  }
});

productsRoute.put("/:pid", async (req, res) => {
  const newValue = req.body;
  if (req.params.pid && !isNaN(parseInt(req.params.pid))) {
    const product = await productManager1.updateProduct(
      parseInt(req.params.pid),
      newValue
    );
    return res.json(product);
  } else {
    return res.status(400).json({ error: "Insert a valid numeric id!" });
  }
});

productsRoute.delete("/:pid", async (req, res) => {
  if (req.params.pid && !isNaN(parseInt(req.params.pid))) {
    const product = await productManager1.deleteProduct(
      parseInt(req.params.pid)
    );
    return res.json(product);
  } else {
    return res.status(400).json({ error: "Insert a valid numeric id!" });
  }
});

export default productsRoute;
