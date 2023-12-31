const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTask,
  getAll, 
  deleteTaskId
} = require("../controllers/mongooseC.js");
const {
  createTaskMDdriver,
  getTask,
  getAllMongoDriver,
  deleteOneMongoDriver,
  deleteWithMongoDriver,
  deleteParams,
  putTask
} = require("../controllers/mongoDriverC.js")


//ruta main ===> "/api/v1/tasks"
//router.get("/", getTask);
router.route("/").get(getTask).post(createTask);
//router.route("/:id").put(putTask).delete(deleteWithMongoDriver);
router.route("/tester").get(getAll).delete(deleteTask);
router.route("/tester/:id").delete(deleteTaskId).put(putTask)
router.route("/mongodriver").get(getAllMongoDriver).post(createTaskMDdriver).delete(deleteOneMongoDriver);

module.exports = router;
