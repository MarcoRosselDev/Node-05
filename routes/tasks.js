const express = require("express");
const router = express.Router();
const {
  getTask,
  createTask,
  putTask,
  deleteTask,
  getAll
} = require("../controllers/controllers.js");

//router.get("/", getTask);
router.route("/").get(getTask).post(createTask);
router.route("/:id").put(putTask).delete(deleteTask);
router.route("/tester").get(getAll)

module.exports = router;
