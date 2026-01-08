const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all published posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({ published: true })
            .sort({ createdAt: -1 })
            .select('-content');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post || !post.published) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Increment views
        post.views += 1;
        await post.save();

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create post (admin only)
router.post('/', auth, async (req, res) => {
    try {
        const { title, content, excerpt, category, imageUrl, tags } = req.body;
        
        const post = new Post({
            title,
            content,
            excerpt,
            category,
            imageUrl,
            tags: tags || [],
            published: true
        });

        await post.save();
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update post (admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete post (admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

