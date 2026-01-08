const Post = require('../models/Post');
const User = require('../models/User');
const Event = require('../models/Event');

exports.getStats = async (req, res) => {
    try {
        const totalPosts = await Post.count();
        const publishedPosts = totalPosts; // Logic can be refined if draft status exists
        const totalViews = await Post.sum('views') || 0;

        res.json({
            totalPosts,
            publishedPosts,
            totalViews
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
