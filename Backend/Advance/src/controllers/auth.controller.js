const userModel = require("../../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * HANDLER: registerUser
 * Creates a new user account and hashes their password.
 */
async function registerUser(req, res) {
    try {
        const { username, email, password, role = "user" } = req.body;

        // 1. Check if the user already exists (by username or email)
        const isUserExist = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (isUserExist) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // 2. Hash the password (make it unreadable for security)
        const hash = await bcrypt.hash(password, 10);

        // 3. Create the user in the database
        const user = await userModel.create({
            username,
            email,
            password: hash,
            role
        });

        // 4. Create a JWT Token to "log them in" immediately
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        // 5. Save the token in a cookie
        res.cookie("token", token, { httpOnly: true });
        
        res.status(201).json({
            message: "User registered successfully",
            user: { id: user._id, username: user.username, role: user.role }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

/**
 * HANDLER: loginUser
 * Verifies credentials and issues a new token.
 */
async function loginUser(req, res) {
    try {
        const { username, email, password } = req.body;

        // 1. Find the user by username or email
        const user = await userModel.findOne({
            $or: [
                { username: username || "" },
                { email: email || "" }
            ]
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        // 2. Compare the provided password with the hashed password in the DB
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        // 3. Create a JWT Token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        // 4. Save the token in a cookie
        res.cookie("token", token, { httpOnly: true });

        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, username: user.username, role: user.role }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { registerUser, loginUser };