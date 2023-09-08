const offerSchema = require("../models/OfferSchema");
const RevisionSchema = require("../models/OfferRevisionSchema");

exports.newOffer = async (req, res) => {
  try {
    const offer = await offerSchema.create(req.body);

    const revisionData = {
      project_id: req.body.project_id,
      offer_id: offer._id,
      revisions: [
        {
          Date: Date.now(),
          data_before_revision: offer,
        },
      ],
    };

    const revision = await RevisionSchema.create(revisionData);

    res.status(200).json({
      message: "Offer added successfully.",
      data: offer,
      revision: revision,
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
    const offers = await offerSchema
      .find({})
      .populate("project_id")
      .populate("client_id")
      .exec();
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
