const mongoose = require("mongoose");

/**
 * MUSIC SCHEMA
 * This defines the structure of a song/music entry in our database.
 */
const musicSchema = new mongoose.Schema({
    title: {
        type: String // The name of the song (optional, fallback to filename in controller)
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId, // A reference to the User ID who uploaded it
        ref: "user", // Connects this ID to the "user" collection
        required: true
    },
    fileUrl: {
        type: String, // The direct link to the audio file on ImageKit
        required: true
    },
    genre: {
        type: String // e.g., Pop, Rock, Jazz, etc.
    }
}, { timestamps: true }); // Adds 'createdAt' and 'updatedAt' automatically

module.exports = mongoose.model("music", musicSchema);
