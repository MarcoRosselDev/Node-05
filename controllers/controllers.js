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
  const { title, content } = req.body;
  const small = new Task({
    title: `${title}`,
    content: `${content}`,
  });
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
