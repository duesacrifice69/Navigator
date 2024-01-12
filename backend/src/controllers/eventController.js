const { Op } = require("sequelize");
const Event = require("../models/Events");
const { Custom500Error } = require("../middleware/errorHandlingMiddleware");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ order: [["createdAt", "DESC"]] });

    return res.json(events);
  } catch (error) {
    
    next(new Custom500Error(error.message));
  }

};

const filterEvent = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    const filterEvents = await Event.findAll({
      where: {
        date: { [Op.between]: [new Date(startDate), new Date(endDate)] },
      },
    });

    return res.json(filterEvents);
  } catch (error) {

    next(new Custom500Error(error.message));
  }
};

const createEvent = async (req, res) => {
  const { title, date, description } = req.body;
  console.log("Received Request Body:", req.body);

  try {
    if (!title || !date) {
      return res
        .status(400)
        .json({ error: "Title and date are required fields" });
    }

    const newEvent = await Event.create({
      title,
      date,
      description,
    });

    console.log("Event created successfully:", newEvent.toJSON());
    return res.status(201).json(newEvent);
  } catch (error) {
    
    next(new Custom500Error(error.message));
  }
};

module.exports = { getAllEvents, createEvent, filterEvent };
