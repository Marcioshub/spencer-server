const express = require("express");
const { getDaysFeedings, addFeeding } = require("../controllers/Feeding");
const router = express.Router();

router.route("/").get(getDaysFeedings).post(addFeeding);

module.exports = router;
