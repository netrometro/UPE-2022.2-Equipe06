const anuncioModel = require ('../models/anuncioModel')

const getAll  = async (req, res) => {

    const anuncios = await anuncioModel.getAll();

    return res.status(200).json(anuncios);
}

module.exports = {
    getAll
}