const express = require("express");
const requireAuthentication = require("../middleware/requireAuthentication");


const team_controller = require("../controllers/user_contoller");
const router = express.Router();
router.post("/", team_controller.createUser);

module.exports = router;
