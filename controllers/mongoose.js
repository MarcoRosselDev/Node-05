const Product = require('../schemas/models.js');

const todosLosDocumentos = async (req, res) => {
  try {
    const respuesta = await Product.find();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  todosLosDocumentos
}