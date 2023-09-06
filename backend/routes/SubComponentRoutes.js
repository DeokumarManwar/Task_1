const express = require("express");
const router = express.Router();

const subcomponentController = require("../controller/SubComponentController");

router.post("/add", subcomponentController.add);
router.get("/all", subcomponentController.getAllSubComponents);
router.delete("/delete/:id", subcomponentController.deleteById);
router.post("/update/:id", subcomponentController.updateById);

module.exports = router;
