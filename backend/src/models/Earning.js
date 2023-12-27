const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/db.config");

const Earning = sequelize.define("Earning", {
  employeeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  Basic_Salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Allowance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Tea_Allowance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  CostOfLiving_Allowance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Productivity_Allowance: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Telephone_Bill_Reimbursement: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  OPD_Treatment: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Earning;
