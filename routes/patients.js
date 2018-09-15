const express = require("express");
const requireAuthentication = require("../middleware/requireAuthentication");

const patient_controller = require("../controllers/patient_controller");
const router = express.Router();
module.exports = router;
