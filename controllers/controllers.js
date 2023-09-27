const getTask = (req, res) => {
  res.status(200).json({ data: "get tasks" });
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
