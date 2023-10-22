const Product = require('../schemas/models.js');

// lista de companys para buscar = ['ikea', 'liddy', 'caressa', 'marcos']
// http:.../mdb?company=ikea ---> ahora esta en req.params para ser usado en find
const todosLosDocumentos = async (req, res) => {
  try {
    // para evitar querys no permitidas desestrucuramos la query
    const {company} = req.query;
    const queryObject = {};
    console.log(req.query);

    if (company) {
      queryObject.company = req.query.company;
    }
    console.log(queryObject);
    // asi nos evitamos querys no deseadas
    // exapmle: /mdb?company=marcos&page=2
    // no considera la req.query.page----> es ignorado
    const respuesta = await Product.find(queryObject);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  todosLosDocumentos
}