const express  = require ('express');
const anuncioController = require('./controllers/anuncioController')

const router = express.Router();

router.get('/', anuncioController.getAll);

module.exports = router;