const express = require("express");
const auth_controller = require("../controllers/auth_controller");
const router = express.Router();

router.post("/", auth_controller.loginUser);
module.exports = router;
