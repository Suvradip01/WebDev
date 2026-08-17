const express = require('express');
const app = express();
const authRoutes = require('../routes/auth.routes');
const postRoutes = require('../routes/post.routes');
const cookieParser = require('cookie-parser');

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;