const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("Task", taskSchema);