const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let settings = new Schema(
  {
    smtp: {
      type: String,
    },
    user: {
      type: String,
    },
    pass: {
      type: String,
    },
    from: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Settings", settings);
