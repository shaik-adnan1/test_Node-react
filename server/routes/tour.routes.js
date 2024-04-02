const express = require("express");

const tourController = require("../controller/tour.controller");

const router = express.Router();

router.route("/").get(tourController.getAllTours);

module.exports = router;
