const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer'); 
const User = require('../models/User');
const PasswordHistory = require('../models/Password');
const { permission } = require("../controllers/permissionController");

const userController = {
  registerUser: async (req, res, next) => {
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

      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        { id: newUser.id, name, role: "user" },
        process.env.JWT_SECRETKEY,
        { expiresIn: maxAge }
      );

      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
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
    attributes: {
      exclude: [
        "password",
        "Id",
        "createdAt",
        "updatedAt",
        "imageMimetype",
        "verificationCode",
        "verificationCodeExpiration",
      
      ],
    },
  });

    const token = permission(userDetails.dataValues);
    res.status(200).json({token});

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