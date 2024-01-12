const { Router } = require("express");
const router = Router();
const {
  login,
  logout,
  forgotPassword,
  resetPassword,
  submitVerificationCode,
} = require("../controllers/authController");
const { uploadImage } = require("../middleware/uploadImage");
const { checkToken } = require("../middleware/auth");
const errorHandlingMiddleware = require("../middleware/errorHandlingMiddleware");

router.post("/register", uploadImage, (req, res) => {
  userController.registerUser(req, res);
});

router.post("/login", login, (req, res) => {
  res.json({ message: "Login successful" });
});

router.post("/logout", logout, (req, res) => {
  res.json({ message: "Logout successful" });
});

router.post("/sendVerificationCode", forgotPassword, (req, res) => {
  res.json({ message: "forgot password successful" });
});

router.post("/submitVerificationCode", submitVerificationCode, (req, res) => {
  res.json({ message: "verification code verified successful" });
});

router.post("/resetPassword", resetPassword, (req, res) => {
  res.json({ message: " resetPassword password successful" });
});

router.get("/auth", checkToken, async (req, res) => {
  res.render("home");
});

router.use(errorHandlingMiddleware.errorHandlingMiddleware);

module.exports = router;
