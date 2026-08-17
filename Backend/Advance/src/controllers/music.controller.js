const musicModel = require("../../model/music.model");
const imagekit = require("../utils/imagekit");

/**
 * HANDLER: uploadMusic
 * This function handles the file upload to ImageKit and saves the data to MongoDB.
 */
async function uploadMusic(req, res) {
    try {
        // 1. Get the non-file data from the request body
        const { title, genre } = req.body;
        
        // 2. Check if a file was actually uploaded by Multer
        if (!req.file) {
            return res.status(400).json({ message: "Please upload a music file" });
        }

        // 3. Upload the file buffer to ImageKit (The Cloud)
        const uploadResponse = await imagekit.upload({
            file: req.file.buffer, // The actual binary data of the song
            fileName: `${Date.now()}-${req.file.originalname}`, // Give it a unique name
            folder: "music_uploads" // The folder inside ImageKit
        });

        // 4. Create a new document in MongoDB with the link from ImageKit
        const music = await musicModel.create({
            title: title || req.file.originalname, // If no title is given, use the filename
            genre,
            artist: req.user.id, // req.user was added by our auth middleware
            fileUrl: uploadResponse.url // The public URL of the song in the cloud
        });

        // 5. Send a success message back to the client
        res.status(201).json({
            message: "Music uploaded successfully",
            music
        });
    } catch (error) {
        // Handle any errors (like connection issues or invalid files)
        res.status(500).json({ message: error.message });
    }
}

/**
 * HANDLER: getAllMusic
 * This function fetches songs in chunks (Pagination).
 * This prevents the server from crashing if there are 10,000+ songs.
 */
async function getAllMusic(req, res) {
    try {
        // 1. Get page and limit from the URL (e.g., /api/music/all?page=1&limit=10)
        // Default to page 1 and 10 items per page
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        
        // 2. Calculate how many songs to skip
        // If we are on page 2 with a limit of 10, we skip the first 10 songs.
        const skip = (page - 1) * limit;

        // 3. Fetch only the required chunk of songs
        const musics = await musicModel.find()
            .populate("artist", "username email")
            .skip(skip)   // Skip previous pages
            .limit(limit) // Only take 'limit' number of songs
            .sort({ createdAt: -1 }); // Show newest songs first

        // 4. Get the total count of songs (useful for frontend to know how many pages exist)
        const totalSongs = await musicModel.countDocuments();

        res.status(200).json({
            currentPage: page,
            totalPages: Math.ceil(totalSongs / limit),
            totalSongs,
            musics
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { uploadMusic, getAllMusic };
