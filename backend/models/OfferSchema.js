const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  project_id: {
    type: Schema.Types.ObjectId,
    ref: "project",
  },

  client_id: {
    type: Schema.Types.ObjectId,
    ref: "client",
    required: true,
    message: "Client is required",
  },

  description_of_panel: {
    type: String,
    required: true,
    message: "Description is required",
  },

  Qty_of_panel: {
    type: Number,
    default: 1,
    min: 1,
  },

  panels_to_be_created: [
    {
      name: {
        type: String,
      },
      parts: [
        {
          part_name: {
            type: String,
          },
          components: [
            {
              type: Schema.Types.ObjectId,
              ref: "component",
            },
          ],
          price: {
            type: Number,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("offer", offerSchema);
