const Product = require('../schemas/models.js');

// lista de companys para buscar = ['ikea', 'liddy', 'caressa', 'marcos']
// http:.../mdb?company=ikea ---> ahora esta en req.params para ser usado en find
const todosLosDocumentos = async (req, res) => {
  try {
    console.log(req.query);
    //es query no params !!!
    const respuesta = await Product.find(req.query);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  todosLosDocumentos
}