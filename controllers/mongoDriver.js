const { MongoClient } = require('mongodb');
require('dotenv').config();

// Replace the uri string with your MongoDB deployment's connection string.
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);

const getOne = async (req, res) => {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("node-api-05");
    const documentos = database.collection("tasks");
    // Execute query
    const documento = await documentos.findOne();
    //si algo falla podemos usar
    if (!documento) {
      throw new Error('Algo salio mal!');
    }
    res.status(200).json(documento)
  } catch(error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

module.exports = {
  getOne
}