// Here
const RevisionSchema = require("../models/OfferRevisionSchema");
const OfferSchema = require("../models/OfferSchema");
exports.getRevision = async (req, res) => {
  try {
    const revision = await RevisionSchema.findOne({
      offer_id: req.body.offer_id,
    })
      .populate("offer_id")
      .populate("project_id")
      .exec();

    res.status(200).json({
      message: "Revision fetched successfully.",
      data: revision,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in fetching Revision",
      data: err,
    });
  }
};

exports.updateRevision = async (req, res) => {
  try {
    const revision = await RevisionSchema.findOne({ offer_id: req.params.id });

    revision.revisions.push({
      Date: Date.now(),
      data_before_revision: req.body,
    });

    revision.save();

    const offerUpdate = await OfferSchema.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );

    res.status(200).json({
      message: "Revision updated successfully.",
      data: revision,
      offer: offerUpdate,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in updating Revision",
      data: err,
    });
  }
};
