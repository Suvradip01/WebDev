const mongoose = require('mongoose');


async function connectDB() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect("");
        
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database Connection Failed:", error.message);
    }
}

module.exports = connectDB;
