const mongoose = require("mongoose");
const moment = require("moment");

const FeedingSchema = new mongoose.Schema({
  day: {
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a").split(",")[0],
  },
  time: {
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a").split(",")[1].substr(1),
  },
  createdAt: {
    type: String,
    default: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
});

module.exports = mongoose.model("Feeding", FeedingSchema);
