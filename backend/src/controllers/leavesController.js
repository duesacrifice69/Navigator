const Leaves = require("../models/Leaves");

const leavesController = {
  addLeaves: async (req, res) => {
    try {
      const { LeaveType, Total,employeeNumber } = req.body;
        
      

      if (!employeeNumber) {
        return res.status(400).json({ error: "employeeNumber parameter is missing" });
      }

      const startTime = new Date();

      const newLeaves = await Leaves.create({
        LeaveType,
        Total,
        employeeNumber,
      });

      const endTime = new Date();
      const responseTime = endTime - startTime;

      console.log("Leaves added:", newLeaves);
      console.log("Response time", responseTime, "ms");
      res.status(201).json({ data: newLeaves, responseTime });
    } catch (err) {
      console.error(err);
      const startTime = new Date();
      const endTime = new Date();
      const responseTime = endTime - startTime;

      res.status(500).send("Internal server error",responseTime);
    }
  },

  getLeaves: async (req, res) => {
    try {
      const employeeNumber = req.employeeNumber;
      const LeavesRecords = await Leaves.findAll({
        where:{employeeNumber},
        attributes: ["Type", "Total","Date"],
      });

      if (!LeavesRecords || LeavesRecords.length === 0) {
        return res.status(404).json({
          error: "No leaves records found.",
          responseTime,
        });
      }

      res.json({ data: LeavesRecords});
    } catch (error) {
      console.error(error);

     

     
    }
  },
};

module.exports = leavesController;
