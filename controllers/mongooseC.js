//const path = require("path");
const Task = require("../schemas/tasks.js");

const createTask = async (req, res) => {
  try {
    const small = new Task(req.body)
    await small.save();
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const putTask = async (req, res) => {
  //A.findByIdAndUpdate(id, update, options)  // returns Query ---> example 
  try {
    const {id:idUpdate} = req.params;
    console.log(req.params);
    const doc = await Task.findByIdAndUpdate(idUpdate, req.body, {new:true, runValidators:true});
    // {new:true, runValidators:true} si no se agrega no se actualiza ( bug problem)
    if (!doc) {
      return res.status(404).json({msg: `no se encontro id : ${idUpdate}`});
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

const deleteTask = async (req, res) => {
  try {
    console.log(req.body);
    const idDelete = await Task.deleteOne(req.body);
    res.status(200).json({
      msg: `Se elimino el id exitosamente ${req.body}`,
      msgMongoose: idDelete
  })
  } catch (error) {
    res.status(500).json({msg:error})
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

const deleteTaskId = async (req, res) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    res.status(404).json({err: `No se encontro el id: ${taskID}`})
  }
  res.status(200).json({ task })
}

module.exports = {
  createTask,
  putTask,
  deleteTask,
  getAll,
  deleteTaskId
};
