const path = require("path");

const getTask = (req, res) => {
  console.log(req.url);
  res.status(200).sendFile(path.resolve(__dirname, "../public/index.html"));
};

const createTask = (req, res) => {
  res.status(200).json({ data: "create task" });
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
