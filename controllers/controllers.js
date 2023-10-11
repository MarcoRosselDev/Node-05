const { MongoClient } = require("mongodb");
const path = require("path");
const Task = require("../schemas/tasks.js");
require('dotenv').config();
const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);

const getTask = async (req, res) => {
  try {
    client.connect()
    const collection = client.db("node-api-05").collection("tasks");
    const consulta = await collection.findOne();
    res.status(200).json(consulta);
  } catch (error) {
    console.error(error)
  } finally {
    await client.close();
  }
};

const createTask = async (req, res) => {
  //const { name, completed } = req.body;
  //const small = new Task({ ----> esto no funciona por que completed 
  //   name: `${name}`,     //----> es por defecto false pero no esta definido en req.body
  //   completed: `${completed}`,//--> por lo que lanza error completed undefined
  //});
  try {
    //const task = await Task.create(req.bodys);
    //res.status(201).json({ task });

    const small = new Task(req.body)
    await small.save();
    res.status(201).json(small);
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const putTask = (req, res) => {
  res.status(200).json({ data: "put task" });
};

const deleteTask = (req, res) => {
  res.send("hi");
};

const getAll = async (req, res) => {
  try {
    const query = await Task.find();
    // this return an object, ---> do this in window because ubuntu is bugged
    res.status(200).json(query)
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  }
}

const collectionMD = client.db('test-store').collection('users');

const getAllMongoDriver = async (req, res) => {
  try {
    client.connect();
    const query = await collectionMD.find();
    res.status(200).json(query);
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  } finally {
    await client.close();
  }
}

module.exports = {
  getTask,
  createTask,
  putTask,
  deleteTask,
  getAll,
  getAllMongoDriver
};
