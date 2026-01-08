const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

// Admin only routes
router.post('/', authMiddleware, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res, next) => {
    // Handle file paths
    if (req.files) {
        if (req.files.image) req.body.imageUrl = '/uploads/' + req.files.image[0].filename;
        if (req.files.video) req.body.videoUrl = '/uploads/' + req.files.video[0].filename;
    }
    next();
}, postController.createPost);

router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;
