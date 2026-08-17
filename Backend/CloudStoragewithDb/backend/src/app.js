const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
const Post = require('./models/post.model');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const uploadFile = require('./services/storage-service');

app.post('/create', upload.single('image'), async (req, res) => {
    // Upload to ImageKit
    const result = await uploadFile(req.file.buffer);
    console.log("ImageKit upload result:", result.url);

    // Save to MongoDB
    const newPost = await Post.create({
        image: result.url,
        caption: req.body.caption || "No caption provided" // Get caption from form data if provided
    });

    res.send("Post created! Check your database now. MongoDB ID: " + newPost._id);
});

app.get('/view', async (req, res) => {
    const allPosts = await Post.find({});
    res.send(allPosts);
});


module.exports = app;   