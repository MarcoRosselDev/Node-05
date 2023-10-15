const express = require("express");
const router = express.Router();
const {
  createTask,
  putTask,
  deleteTask,
  getAll
} = require("../controllers/mongooseC.js");
const {
  createTaskMDdriver,
  getTask,
  getAllMongoDriver,
  deleteOneMongoDriver
} = require("../controllers/mongoDriverC.js")

//router.get("/", getTask);
router.route("/").get(getTask).post(createTask);
router.route("/:id").put(putTask).delete(deleteTask);
router.route("/tester").get(getAll).delete(deleteTask);
router.route("/mongodriver").get(getAllMongoDriver).post(createTaskMDdriver).delete(deleteOneMongoDriver);

module.exports = router;
