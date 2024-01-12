const { Router } = require("express");
const router = Router();
const { auth } = require("../middleware/authMiddleware");
const {
  permissionsData,
} = require("../controllers/permissionController");
const errorHandlingMiddleware = require("../middleware/errorHandlingMiddleware"); 
const attendanceController = require("../controllers/attendanceController");
const  permissionController =require("../controllers/permissionController");
const userController =require("../controllers/userController");
const leavesController =require("../controllers/leavesController");
const liabilityController=require("../controllers/laibilityController");
const financialDataContoller = require("../controllers/financialDataContoller");
const eventController =require("../controllers/eventController");
/**
 * @swagger
 * /api/users/attendance:
 *   get:
 *     summary: Get user attendance
 *     description: Retrieve attendance data for a user
 *     tags:
 *       - Attendance
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 
 *
 *       // Add more responses as needed
 */
router.get("/attendance", auth, attendanceController.getAttendance);

/**
 * @swagger
 * /api/users/leaves:
 *   get:
 *     summary: Get user leaves
 *     description: Retrieve leaves data for a user
 *     tags:
 *       - Leaves
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your response properties here
 *       // Add more responses as needed
 */
router.get("/leaves", auth, async (req, res) => {
  leavesController.getLeaves(req, res);
});

/**
 * @swagger
 * /api/users/events:
 *   get:
 *     summary: Get all events
 *     description: Retrieve all events
 *     tags:
 *       - Events
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your response properties here
 *       // Add more responses as needed
 */
router.get("/events", async (req, res) => {
  eventController.getAllEvents(req, res);
});

/**
 * @swagger
 * /api/users/events-create:
 *   post:
 *     summary: Create a new event
 *     description: Create a new event
 *     tags:
 *       - Events
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         employeeNumber:
 *           type: integer
 *           description: employeeNumber
 *         Date:
 *           type: string
 *           description: title of post
 *       example:
 *         id: 1
 *         EmployeeNumber: 800000
 *         title: 23/12/2024
 *     responses:
 *       '200':
 *         description: Successful operation
 *       // Add more responses as needed
 */
router.post("/events-create", async (req, res) => {
  eventController.createEvent(req, res);
});

/**
 * @swagger
 * /api/users/liabilities:
 *   get:
 *     summary: Get user liabilities
 *     description: Retrieve liabilities data for a user
 *     tags:
 *       - Liabilities
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your response properties here
 *       // Add more responses as needed
 */
router.get("/liabilities", auth, async (req, res) => {
  liabilityController.getLiabilities(req, res);
});

/**
 * @swagger
 * /api/users/budget:
 *   get:
 *     summary: Get user budget information
 *     description: Retrieve budget information for a user
 *     tags:
 *       - Budget
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 // Define your response properties here
 *       // Add more responses as needed
 */
router.get("/budget", auth, async (req, res) => {
  financialDataContoller.getFinanceData(req, res);
});

// Add more routes as needed...

// Error handling middleware
router.use(errorHandlingMiddleware.errorHandlingMiddleware);

module.exports = router;

