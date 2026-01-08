const Subscriber = require('../models/Subscriber');

exports.getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.findAll({ order: [['createdAt', 'DESC']] });
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        const subscriber = await Subscriber.create({ email });
        res.status(201).json(subscriber);
    } catch (err) {
        res.status(400).json({ error: err.message }); // Likely unique constraint error
    }
};
