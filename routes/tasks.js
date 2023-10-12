const express = require("express");
const router = express.Router();
const {
  createTask,
  putTask,
  deleteTask,
  getAll
} = require("../controllers/controllersMongoose.js");
const {
  createTaskMDdriver,
  getTask,
  getAllMongoDriver
} = require("../controllers/controllersMongoDriver.js")

//router.get("/", getTask);
router.route("/").get(getTask).post(createTask);
router.route("/:id").put(putTask).delete(deleteTask);
router.route("/tester").get(getAll);
router.route("/mongodriver").get(getAllMongoDriver).post(createTaskMDdriver);

module.exports = router;
