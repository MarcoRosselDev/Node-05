//const path = require("path");
const Task = require("../schemas/tasks.js");

const createTask = async (req, res) => {
  try {
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

const deleteTask = async (req, res) => {
  try {
    /* console.log(req.body);
    console.log(req.body._id); */
    const idDelete = await Task.deleteOne(req.body);
    res.status(200).json({
      msg: "Se elimino el id exitosamente",
      msgMongoose: idDelete
  })
  } catch (error) {
    res.status(404).json({msg:error})
  }
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
