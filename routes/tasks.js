const express = require("express");
const router = express.Router();
const { getTask } = require("../controllers/controllers.js");

router.get("/", getTask);

module.exports = router;
