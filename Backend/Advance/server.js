// 1. Load environment variables from .env file into process.env
require("dotenv").config();

// 2. Import the express application configuration
const app = require("./src/app");

// 3. Import the database connection function
const { connectDB } = require("./src/db/db");

// 4. Connect to MongoDB Atlas
connectDB();

// 5. Define the Port (use .env value or fallback to 3000)
const PORT = process.env.PORT || 3000;

// 6. Start the server and listen for incoming requests
app.listen(PORT, () => {
    // 7. Log a message to the console confirming the server is active
    console.log(`🚀 Server is running on port ${PORT}`);
});