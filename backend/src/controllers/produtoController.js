import express from "express";
import {
  createProduct,
  findAllProducts,
  findProduct,
  deleteProduct,
  updateProduct,
} from "../services/produtoService.js";
import multer from "multer";
import fs from "fs";

const upload = multer({ dest: "images/" });

const produtoController = express.Router();

produtoController.post(
  "/produto/register",
  upload.single("image"),
  async (req, res) => {
    createProduct(req, res);
  }
);

produtoController.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const readStream = fs.createReadStream(`images/${imageName}`);
  readStream.pipe(res);
});

produtoController.get("/produtos", async (req, res) => {
  findAllProducts(res);
});

produtoController.get("/produto/:id", async (req, res) => {
  findProduct(req, res);
});

produtoController.put("/produto/update/:id", async (req, res) => {
  updateProduct(req, res);
});

produtoController.delete("/produto/delete/:id", async (req, res) => {
  deleteProduct(req, res);
});

export default produtoController;
