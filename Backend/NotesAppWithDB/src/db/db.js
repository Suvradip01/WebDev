const mongoose = require('mongoose');


async function connectDB() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect("mongodb://ghoshsuvradip215_db_user:X2Qr7Yb03Dm8djUZ@ac-9tbnijo-shard-00-00.dpwtrhs.mongodb.net:27017,ac-9tbnijo-shard-00-01.dpwtrhs.mongodb.net:27017,ac-9tbnijo-shard-00-02.dpwtrhs.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-fvuiwi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0");
        
        console.log("Database Connected Successfully");
    } catch (error) {
        console.error("Database Connection Failed:", error.message);
    }
}

module.exports = connectDB;
