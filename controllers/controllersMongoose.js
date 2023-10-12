//const path = require("path");
const Task = require("../schemas/tasks.js");

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

// esto es con mongoose
const getAll = async (req, res) => {
  try {
    const query = await Task.find();
    res.status(200).json(query)
  } catch (error) {
    res.status(500).json({ errorMsg: error })
  }
}

module.exports = {
  createTask,
  putTask,
  deleteTask,
  getAll,
};
