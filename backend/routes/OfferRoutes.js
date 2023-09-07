const express = require("express");
const router = express.Router();

const offerController = require("../controller/OfferController");

router.post("/add", offerController.newOffer);

router.get("/getOffers", offerController.getOffers);

module.exports = router;
