const projectSchema = require("../models/projectSchema");

exports.addProject = async (req, res) => {
  try {
    const project = await projectSchema.create(req.body);

    // Here

    res.status(200).json({
      message: "Project added successfully.",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in adding project",
      data: err,
    });
  }
};

// Here
exports.getProject = async (req, res) => {
  try {
    const project = await projectSchema.find({
      client_id: req.body.client_id,
    });

    res.status(200).json({
      message: "Project fetched successfully.",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error in fetching project",
      data: err,
    });
  }
};
