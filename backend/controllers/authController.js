const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check existing
        const existing = await User.findOne({ where: { email } });
        if (existing) return res.status(400).json({ error: 'Email already registered' });

        // Hash password explicitly
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(`Login attempt for: ${email}`);

        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ error: 'User not found' });
        }

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) {
            console.log('Invalid password');
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secretkey');
        console.log('Login successful');
        res.header('auth-token', token).json({ token, role: user.role });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.verify = (req, res) => {
    res.status(200).json({ message: 'Verified', user: req.user });
};
