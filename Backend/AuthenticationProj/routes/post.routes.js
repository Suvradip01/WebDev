const express = require('express');
const jwt = require("jsonwebtoken");

const postModel = require('../model/post.model');
const { userAuth } = require('../src/middleware/auth.middleware');

const router = express.Router();

router.post("/create", userAuth, async (req, res) => {
    try {
        const { title, content } = req.body;

        const newPost = await postModel.create({
            user: req.user.id,
            title,
            content
        });

        res.status(201).json({
            message: "Post created successfully",
            post: newPost
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/view", async (req, res) => {
    try {
        const posts = await postModel.find().populate('user', 'username email');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
