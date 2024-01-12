const { Router } = require("express");
const router = Router();
const { auth } = require("../middleware/authMiddleware");
const attendanceController = require("../controllers/attendanceController");
const errorHandlingMiddleware = require("../middleware/errorHandlingMiddleware");

router.post("/attendence-add", auth, attendanceController.addAttendance);
router.get("/attendance", auth, attendanceController.getAttendance);

router.use(errorHandlingMiddleware.errorHandlingMiddleware);

module.exports = router;
