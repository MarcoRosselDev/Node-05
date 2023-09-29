const path = require("path");
const Task = require("../schemas/tasks.js");

const getTask = async (req, res) => {
  //console.log(req.url);
  //res.status(200).sendFile(path.resolve(__dirname, "../public/index.html"));
  // const smallTask = new Task({ title: "first task", content: "random text" });
  // await smallTask.save();
  res.status(200).json({ data: "you are in localhost:5000/api/v1/tasks" });
};

const createTask = async (req, res) => {
  //res.status(200).json({ data: "create task" });
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
