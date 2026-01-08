const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all posts (admin)
router.get('/posts', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get dashboard stats
router.get('/stats', auth, async (req, res) => {
    try {
        const totalPosts = await Post.countDocuments();
        const publishedPosts = await Post.countDocuments({ published: true });
        const totalViews = await Post.aggregate([
            { $group: { _id: null, total: { $sum: '$views' } } }
        ]);

        res.json({
            totalPosts,
            publishedPosts,
            totalViews: totalViews[0]?.total || 0
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

