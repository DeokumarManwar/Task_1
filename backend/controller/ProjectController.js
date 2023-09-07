const projectSchema = require("../models/projectSchema");

exports.addProject = async (req, res) => {
  try {
    const project = await projectSchema.create(req.body);
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
