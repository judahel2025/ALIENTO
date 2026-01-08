const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });

        // Increment views
        post.views += 1;
        await post.save();

        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPost = async (req, res) => {
    try {
        const { title, excerpt, content, category, imageUrl, videoUrl } = req.body;
        const post = await Post.create({ title, excerpt, content, category, imageUrl, videoUrl });
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const result = await Post.destroy({ where: { id: req.params.id } });
        if (!result) return res.status(404).json({ error: 'Post not found' });
        res.json({ message: 'Post deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
