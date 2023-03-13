import express from 'express'
import { createProduct, findAllProducts, findProduct, deleteProduct, updateProduct} from '../services/produtoService.js'


const produtoController = express.Router()

produtoController.post('/produto/register', async (req, res) => {
    createProduct(req, res)
})

produtoController.get('/produtos', async (req, res) => {
    findAllProducts(res)
})

produtoController.get('/produto/:id', async(req, res) => {
    findProduct(req, res)
})

produtoController.put('/produto/update/:id', async (req, res) => {
    updateProduct(req, res)
})

produtoController.delete('/produto/delete/:id', async (req, res) => {
    deleteProduct(req, res)
})

export default produtoController;