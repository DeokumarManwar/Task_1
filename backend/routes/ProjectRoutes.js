const express = require("express");
const router = express.Router();

const projectController = require("../controller/ProjectController");

router.post("/add", projectController.addProject);

// Here
router.post("/getProjects", projectController.getProject);

module.exports = router;
