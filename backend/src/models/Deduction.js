const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/db.config");

const Dediction = sequelize.define("Dedication", {
  employeeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Transport_Charges: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Distress_Loan_10_Month: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Distress_Loan_10_Month_Interest: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Sports_club: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Stamp_deduction: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  By_Pass: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Medical_treatment: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Payee_monthly: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});


module.exports = Dediction;
