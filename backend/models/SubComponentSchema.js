const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subComponentSchema = new Schema({
  desc: {
    type: String,
    required: true,
    unique: true,
    message: "Name is required and ahould be unique.",
  },

  catalog: [
    {
      catalog_number: {
        type: String,
        required: true,
      },
      rating: [
        {
          rating_value: {
            type: String,
          },
          companies: [
            {
              company_id: {
                type: Schema.Types.ObjectId,
                ref: "Companies",
              },
              price: {
                type: Number,
                default: 0,
              },
              discount: {
                type: Number,
                default: 0,
              },
            },
          ],
        },
      ],
    },
  ],
});

module.exports = mongoose.model("subcomponent", subComponentSchema);
