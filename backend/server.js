const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./config/database');
const User = require('./models/User');
const Post = require('./models/Post'); // Import to sync
const Event = require('./models/Event'); // Import to sync
const Subscriber = require('./models/Subscriber'); // Import to sync

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/subscribers', require('./routes/subscriberRoutes'));

// Helper to seed admin
const seedAdmin = async () => {
    try {
        const adminEmail = 'alliesjude@gmail.com';
        const rawPassword = 'alliesjude@gmail.com';
        // Manually hash to be absolutely sure
        const bcrypt = require('bcryptjs');
        const hashedPassword = await bcrypt.hash(rawPassword, 10);

        const admin = await User.findOne({ where: { email: adminEmail } });

        if (admin) {
            admin.password = hashedPassword;
            await admin.save();
            console.log('✓ Admin credentials synced (Password reset)');
        } else {
            await User.create({
                username: 'Admin',
                email: adminEmail,
                password: hashedPassword,
                role: 'admin'
            });
            console.log('✓ Admin user seeded');
        }
    } catch (error) {
        console.error('Seed error:', error);
    }
};

// Database and Server Start
sequelize.sync({ force: false }) // Don't drop tables
    .then(async () => {
        console.log('✓ Database connected and synced');
        await seedAdmin();

        app.listen(PORT, () => {
            console.log(`✓ Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('✗ Database connection error:', err));
