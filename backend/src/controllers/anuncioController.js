const produtoModel = require ('../models/produtoModel')

const getAll  = async (req, res) => {

    const produtos = await produtoModel.getAll();

    return res.status(200).json(produtos);
}

module.exports = {
    getAll
}