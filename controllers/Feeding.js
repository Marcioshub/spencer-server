const moment = require("moment-timezone");
const Feeding = require("../models/Feeding");
const ErrorResponse = require("../utils/ErrorResponse");
const asyncHandler = require("../utils/Async");

/*
  @descripton:      Get all feedings of the day
  @route:           GET /api/feedings
  @access:          Public
*/
exports.getDaysFeedings = asyncHandler(async (req, res, next) => {
  if (process.env.API_KEY !== req.body.api_key) {
    res.status(403).json({
      error: "Access denied",
    });
  }

  // current day
  const currentDay = moment()
    .tz("America/New_York")
    .format("MMMM Do YYYY, h:mm:ss a")
    .split(",")[0];
  //console.log("currentday", currentDay);

  const feedings = await Feeding.find({
    day: currentDay,
  });

  //console.log(feedings);

  if (!feedings) {
    return next(
      new ErrorResponse(`There have been no feedings recorded today`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: feedings,
  });
});

/*
  @descripton:      Add a feeding for the day
  @route:           POST /api/feedings
  @access:          Public
*/
exports.addFeeding = asyncHandler(async (req, res, next) => {
  if (process.env.API_KEY !== req.body.api_key) {
    res.status(403).json({
      error: "Access denied",
    });
  }

  await Feeding.create({});

  res.status(201).json({
    success: true,
  });
});
