// Here
const componentSchema = require("../models/ComponentSchema");

exports.addComponent = async (req, res) => {
  try {
    const component = await componentSchema.create(req.body);
    res.status(200).json({
      message: "Component added successfully.",
      data: component,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in adding Component",
      data: err,
    });
  }
};

exports.getAllCompComponents = async (req, res) => {
  try {
    const component = await componentSchema.find();
    res.status(200).json({
      message: "Components Fetched Successfully",
      data: component,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching Component",
      err: error,
    });
  }
};

// Here
exports.deleteComponents = async (req, res) => {
  try {
    const component = await componentSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Component deleted successfully",
      data: component,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in deleting Component",
      data: err,
    });
  }
};
