const getTask = (req, res) => {
  res.status(200).send("You are on api get v1");
};

module.exports = {
  getTask,
};
