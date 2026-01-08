const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll({ order: [['date', 'ASC']] });
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const { title, date, location, description } = req.body;
        const event = await Event.create({ title, date, location, description });
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const result = await Event.destroy({ where: { id: req.params.id } });
        if (!result) return res.status(404).json({ error: 'Event not found' });
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
