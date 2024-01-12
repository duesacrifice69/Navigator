const Budget = require("../models/Budget");
const sequelize = require("../../configuration/db.config");
const { Op } = require("sequelize");
const { Custom500Error } = require("../middleware/errorHandlingMiddleware");

const getFinanceData = async (req, res) => {
  const { year, month } = req.query;
  const employeeNumber = req.employeeNumber;

  try {
    const earningData = await Budget.findAll({
      where: {
        [Op.and]: [
          sequelize.where(sequelize.fn("MONTH", sequelize.col("Date")), month),
          sequelize.where(sequelize.fn("YEAR", sequelize.col("Date")), year),
          { employeeNumber, BudgetType: "ALLOWANCE" },
        ],
      },
      attributes: ["Description", "Amount"],
    });
    const deductionData = await Budget.findAll({
      where: {
        [Op.and]: [
          sequelize.where(sequelize.fn("MONTH", sequelize.col("Date")), month),
          sequelize.where(sequelize.fn("YEAR", sequelize.col("Date")), year),
          { employeeNumber, BudgetType: "DEDUCTION" },
        ],
      },
      attributes: ["Description", "Amount"],
    });
    res.status(200).json({ earningData, deductionData });
  } catch (error) {
    next(new Custom500Error(error.message));
  }

};

module.exports = { getFinanceData };
