const express = require("express");
const app = express();

/**
 * 1. IMPORT ROUTERS
 * These are the files that define our API paths (endpoints).
 */
const authRouter = require("../routes/auth.route");

/**
 * 2. IMPORT PLUGINS (MIDDLEWARES)
 */
const cookieParser = require("cookie-parser"); // Parses cookies so we can read tokens
const cors = require("cors"); // Allows external websites (like your frontend) to access this API

/**
 * 3. SETUP PLUGINS
 */
app.use(express.json()); // Tells the app to expect JSON data in request bodies
app.use(cookieParser()); // Enables reading of cookies
app.use(cors());         // Enables Cross-Origin Resource Sharing

/**
 * 4. ROUTE MOUNTING
 * This tells Express: "If a request starts with /api/auth, use the authRouter."
 */
app.use("/api/auth", authRouter);   // e.g., /api/auth/register

// Export the app so it can be started in server.js
module.exports = app;