const { MongoClient } = require("mongodb");
require('dotenv').config();
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);
const collectionMD = client.db('node-api-05').collection('tasks');

const createTaskMDdriver = async (req, res) => {
  try {
    client.connect();
    const x = await collectionMD.insertOne(req.body);
    res.status(201).json(x);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally{
    await client.close();
  }
}

const getTask = async (req, res) => { // ---> obtener un documento de para ver la estructura
  try {
    client.connect()
    const consulta = await collectionMD.findOne();
    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally {
    await client.close();
  }
};

const getAllMongoDriver = async (req, res) => {
  try {
    client.connect();
    // this return an object, ---> do this in window because ubuntu is bugged
    const query = await collectionMD.find();
    let send = []
    await query.forEach(doc => send.push(doc));
    res.status(200).json(send);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally {
    await client.close();
  }
}

module.exports = {
  createTaskMDdriver,
  getTask,
  getAllMongoDriver
};
