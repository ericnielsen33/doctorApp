const express = require("express");
const requireAuthentication = require("../middleware/requireAuthentication");

const patient_controller = require("../controllers/patient_controller");
const router = express.Router();

router.post("/", requireAuthentication, patient_controller.createNewPatient);
router.get("/", requireAuthentication, patient_controller.getUserPatients);
router.get("/:id", patient_controller.getPatientById);
router.delete("/:id", patient_controller.removePatient);

module.exports = router;
