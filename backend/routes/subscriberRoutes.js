const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', subscriberController.subscribe);
router.get('/', authMiddleware, subscriberController.getAllSubscribers);

module.exports = router;
