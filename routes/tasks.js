const express = require("express");
const router = express.Router();
const {
  getTask,
  createTask,
  putTask,
  deleteTask,
} = require("../controllers/controllers.js");

//router.get("/", getTask);
router.route("/").get(getTask).post(createTask);
router.route("/:id").put(putTask).delete(deleteTask);

module.exports = router;
