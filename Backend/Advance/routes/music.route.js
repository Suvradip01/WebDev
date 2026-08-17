const express = require("express");
const router = express.Router();
const musicController = require("../src/controllers/music.controller");
const { artistAuth, userAuth } = require("../src/middleware/auth.middleware");
const upload = require("../src/middleware/multer.middleware");

/**
 * ROUTE: POST /api/music/upload
 * - artistAuth: Checks if the user is a logged-in Artist.
 * - upload.single('file'): Multer parses the file from the request.
 * - musicController.uploadMusic: Saves everything to the cloud and DB.
 */
router.post("/upload", artistAuth, upload.single("file"), musicController.uploadMusic);

/**
 * ROUTE: GET /api/music/all
 * - userAuth: Checks if the person is logged in.
 * - musicController.getAllMusic: Fetches all songs from the DB.
 */
router.get("/all", userAuth, musicController.getAllMusic);

module.exports = router;
