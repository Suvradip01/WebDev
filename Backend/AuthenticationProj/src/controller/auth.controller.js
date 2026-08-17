const userModel = require('../../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function RegisterUser(req, res) {
    try {
        const { username, email, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({ username, email, password: hashedPassword });

        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie("token", token, {
            httpOnly: true, // Secure the cookie from XSS
            secure: process.env.NODE_ENV === 'production'
        });

        res.status(201).json({
            message: "User registered successfully",
            user: { id: user._id, username: user.username, email: user.email } // Don't send the password back
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function LoginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({
            id: user._id,
        }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        });

        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function LogoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
}

module.exports = { RegisterUser, LoginUser, LogoutUser };