const offerSchema = require("../models/OfferSchema");

exports.newOffer = async (req, res) => {
  try {
    const offer = await offerSchema.create(req.body);
    res.status(200).json({
      message: "Offer added successfully.",
      data: offer,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in adding offer",
      data: err,
    });
  }
};

exports.getOffers = async (req, res) => {
  try {
    const offers = await offerSchema.find({});
    res.status(200).json({
      message: "Offers fetched successfully.",
      data: offers,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in adding offer",
      data: err,
    });
  }
};
