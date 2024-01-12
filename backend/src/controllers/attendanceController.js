const Attendance = require("../models/Attendance");
const {
  Custom400Error,
  Custom500Error,
} = require("../middleware/errorHandlingMiddleware");

const attendanceController = {
  addAttendance: async (req, res, next) => {
    const { Date, InTime, OutTime } = req.body;

    try {
      const newAttendance = await Attendance.create({
        Date,
        InTime,
        OutTime,
      });

      console.log("Attendance added:", newAttendance);

      res.redirect("/attendance");
    } catch (error) {
      
      next(new Custom400Error("employeeNumber parameter is missing!"));
    }
  },

  getAttendance: async (req, res, next) => {
    try {
      const employeeNumber = req.employeeNumber;

      if (!employeeNumber) {
        throw new Custom400Error("employeeNumber parameter is missing!");
      }
      const attendanceRecords = await Attendance.findAll({
        where: { employeeNumber },
        attributes: ["Date", "InTime", "OutTime"],
      });
      res.status(200).json({ data: attendanceRecords });
    } catch (error) {
      
      next(new Custom500Error("server error!"));
    }
  },
};

module.exports = attendanceController;
