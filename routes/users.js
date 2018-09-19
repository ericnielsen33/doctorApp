const express = require("express");
const requireAuthentication = require("../middleware/requireAuthentication");
const user_controller = require("../controllers/user_contoller");

const router = express.Router();

router.post("/", user_controller.createUser);
router.get("/me", requireAuthentication, user_controller.getCurrentUser);
router.put("/:id", requireAuthentication, user_controller.updateUserProperties);
// router.delete("/:id", user_controller.removeUser);

module.exports = router;
