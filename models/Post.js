const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: 'ALIENTO'
    },
    published: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    },
    tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);

