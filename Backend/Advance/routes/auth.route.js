const express = require("express");
const router = express.Router();
const authController = require("../src/controllers/auth.controller");
const { userAuth } = require("../src/middleware/auth.middleware");

const { registerValidator, loginValidator, validate } = require("../src/middleware/validator.middleware");

/**
 * ROUTE: POST /api/auth/register
 * Creates a new account with validation.
 */
router.post("/register", registerValidator, validate, authController.registerUser);

/**
 * ROUTE: POST /api/auth/login
 * Logs in and returns a cookie with validation.
 */
router.post("/login", loginValidator, validate, authController.loginUser);

/**
 * ROUTE: GET /api/auth/profile
 * A protected route to see your own data.
 */
router.get("/profile", userAuth, (req, res) => {
    res.status(200).json({ message: "Welcome to your profile", user: req.user });
});

module.exports = router;