const Product = require('../schemas/models.js');

// lista de companys para buscar = ['ikea', 'liddy', 'caressa', 'marcos']
const todosLosDocumentos = async (req, res) => {
  try {
    const respuesta = await Product.find({
      company: 'liddy'
    });
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  todosLosDocumentos
}