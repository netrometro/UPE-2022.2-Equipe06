const connection = require('./connection')

const getAll = async () => {
    const anuncios = await connection.execute("SELECT * FROM anuncios")
    return anuncios;
}

module.exports = {
    getAll
}