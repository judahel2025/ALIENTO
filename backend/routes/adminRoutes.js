const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const postController = require('../controllers/postController');

// All admin routes require auth
router.use(authMiddleware);

router.get('/stats', adminController.getStats);
router.get('/posts', postController.getAllPosts); // Re-use for admin list

module.exports = router;
