const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let mailData = new Schema(
  {
    to: {
      type: String,
    },
    subject: {
      type: String,
    },
    text: {
      type: String,
    },
    html: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("maildata", mailData);
