const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const adminRoutes = require('./routes/admin');

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aliento')
.then(() => console.log('✓ MongoDB connected'))
.catch(err => console.log('✗ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/admin', adminRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/post/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'post.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
    console.log(`✓ Admin panel: http://localhost:${PORT}/admin`);
});
