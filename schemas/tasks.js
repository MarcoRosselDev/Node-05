const mongoose = require("mongoose");
/*
const taskSchema = new mongoose.Schema({
  title: String,
  content: String,
});
*/

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "deve espesificar un nombre"],// lanza error si no se incluye
    trim: true, // esto elimina los espacios innecesarios === "   marco   " == "marco"
    maxlength: [20, "no puede ser mas largo que 20 caracteres."]
  },
  completed: {
    type: Boolean,
    default: false  // valor por defecto
  }
})

module.exports = mongoose.model("Task", TaskSchema);
