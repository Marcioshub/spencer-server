const mongoose = require("mongoose");
const moment = require("moment-timezone");

const FeedingSchema = new mongoose.Schema({
  day: {
    type: String,
    default: moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY, h:mm:ss a")
      .split(",")[0],
  },
  time: {
    type: String,
    default: moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY, h:mm:ss a")
      .split(",")[1]
      .substr(1),
  },
  createdAt: {
    type: String,
    default: moment().tz("America/New_York").format("MMMM Do YYYY, h:mm:ss a"),
  },
});

module.exports = mongoose.model("Feeding", FeedingSchema);
