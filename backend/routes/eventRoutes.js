const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', eventController.getAllEvents);
router.post('/', authMiddleware, eventController.createEvent);
router.delete('/:id', authMiddleware, eventController.deleteEvent);

module.exports = router;
