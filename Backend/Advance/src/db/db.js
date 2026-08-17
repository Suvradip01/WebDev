const mongoose = require("mongoose");

/**
 * DATABASE CONNECTION
 * This function connects our Express server to the MongoDB Atlas cloud database.
 * We use an async function because connecting to a database takes time.
 */
async function connectDB(){
    try{
        // process.env.MONGODB_URI is the connection string from your .env file
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Connected to MongoDB");
    }
    catch(error){
        // If the connection fails (e.g., wrong password), we log the error
        console.log("❌ MongoDB connection error:", error.message);
    }
}

module.exports = {connectDB}