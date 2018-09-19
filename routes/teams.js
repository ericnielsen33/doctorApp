const express = require("express");
const requireAuthentication = require("../middleware/requireAuthentication");


const team_controller = require("../controllers/team_controller");
const router = express.Router();
router.post("/", team_controller.createTeam);

module.exports = router;
