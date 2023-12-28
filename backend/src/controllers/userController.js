const bcrypt = require("bcrypt");
const User = require("../models/User");
const PasswordHistory = require("../models/Password");

const userController = {
  registerUser: async (req, res) => {
    try {
      const {
        name,
        employeeNumber,
        email,
        mobile,
        nicNumber,
        password,
        imagePath,
        imageMimetype,
      } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        name,
        employeeNumber,
        email,
        mobile,
        nicNumber,
        password: hashedPassword,
        imagePath,
        imageMimetype,
      });

      await PasswordHistory.create({
        password: hashedPassword,
        userId: newUser.id,
      });

      return res.status(201).json({
        message: "User successfully created",
        newUser,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "User not successfully created",
        error: error.message,
      });
    }
  },

  getRegisteredUserDetails: async (req, res) => {
    try {
      const userDetails = await User.findByPk(req.userId, {
        attributes: ["name", "employeeNumber", "mobile", "nicNumber", "email"],
      });

      res.status(200).json({ data: userDetails });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error retrieving user details",
        error: error.message,
      });
    }
  },
};

module.exports = userController;
//201 Created
