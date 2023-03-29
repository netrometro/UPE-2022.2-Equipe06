import express from 'express'
import { carrinhoDelete, carrinhoGetAll, carrinhoPost, carrinhoUpdate } from '../services/carrinhoService.js';

const carrinhoController = express.Router();


carrinhoController.post("/carrinho", async (req, res) => {
    carrinhoPost(req,res)
});

carrinhoController.delete('/carrinho/delete/:id', async (req, res) => {
    carrinhoDelete(req, res)
})

carrinhoController.put('/carrinho/:id', async (req, res) => {
    carrinhoUpdate(req, res)
})

carrinhoController.get('/carrinho', async (req, res) => {
    carrinhoGetAll(req, res)
})

export default userController;