const mongoose = require("mongoose");

/**
 * DATABASE CONNECTION
 * This function connects our Express server to the MongoDB Atlas cloud database.
 * We use an async function because connecting to a database takes time.
 */

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log(`Error Connecting DB: ${error.message}`);
  }
};

module.exports = connectDB;