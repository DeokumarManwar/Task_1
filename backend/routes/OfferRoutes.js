const express = require("express");
const router = express.Router();

const offerController = require("../controller/OfferController");

router.post("/add", offerController.newOffer);

module.exports = router;
