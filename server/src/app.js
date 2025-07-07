import "dotenv/config";
import express from "express";
import { eq } from "drizzle-orm";
import cors from "cors";

import db from "./db.js";
import { products } from "./schema.js";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/products", async (req, res) => {
  console.log(req.query);
  try {
    const productsList = await db.select().from(products);
    res.json(productsList);
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await db
      .select()
      .from(products)
      .where(eq(products.id, id))
      .limit(1);

    if (product.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product[0]);
  } catch (error) {
    console.error("DB error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
