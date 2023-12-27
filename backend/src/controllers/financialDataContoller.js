const Earning = require("../models/Earning");
const Dedication = require("../models/Deduction");
const sequelize = require("../../configuration/db.config");
const { Op } = require("sequelize");

const getFinanceData = async (req, res) => {
  const { year, month } = req.body;
  const employeeNumber = req.employeeNumber;
console.log(req.employeeNumber);
  try {
    const earningData = await Earning.findOne({
      where: {
        [Op.eq]: [
          sequelize.where(sequelize.fn("MONTH", sequelize.col("Date")), month),
          sequelize.where(sequelize.fn("YEAR", sequelize.col("Date")), year),
          { employeeNumber },
        ],
      },
      attributes: [
        "Basic_Salary",
        "Allowance",
        "Tea_Allowance",
        "CostOfLiving_Allowance",
        "Productivity_Allowance",
        "Telephone_Bill_Reimbursement",
        "OPD_Treatment",
      ],
      having: sequelize.literal(`
        "Basic_Salary" + "Allowance" + "Tea_Allowance" + "CostOfLiving_Allowance" +
        "Productivity_Allowance" + "Telephone_Bill_Reimbursement" + "OPD_Treatment" > 0
      `),
    });

    const deductionData = await Dedication.findAll({
      where: { employeeNumber, Date: req.body.Date },
      attributes: [
        "Transport_Charges",
        "Distress_Loan_10_Month",
        "Distress_Loan_10_Month_Interest",
        "Sports_club",
        "Stamp_deduction",
        "By_Pass",
        "Medical_treatment",
        "Payee_monthly",
      ],
      having: sequelize.literal(`
        "Transport_Charges" + "Distress_Loan_10_Month" + "Distress_Loan_10_Month_Interest" +
        "Sports_club" + "Stamp_deduction" + "By_Pass" + "Medical_treatment" + "Payee_monthly" > 0
      `),
    });

    res.json({ earningData, deductionData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getFinanceData };
