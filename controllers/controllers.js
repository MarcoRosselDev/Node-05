const { MongoClient } = require("mongodb");
const path = require("path");
const Task = require("../schemas/tasks.js");
require('dotenv').config()
const uri = process.env.MONGO_URL

const client = new MongoClient(uri)

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
  console.log(req.body);
  // const small = new Task({ ----> esto no funciona por que completed 
  //   name: `${name}`,     //----> es por defecto false pero no esta definido en req.body
  //   completed: `${completed}`,//--> por lo que lanza error completed undefined
  // });
  const small = new Task(req.body)
  await small.save();
  res.status(200).json({ small });
};

const putTask = (req, res) => {
  res.status(200).json({ data: "put task" });
};

const deleteTask = (req, res) => {
  res.send("hi");
};

module.exports = {
  getTask,
  createTask,
  putTask,
  deleteTask,
};
