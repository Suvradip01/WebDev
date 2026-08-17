const mongoose = require("mongoose");

/**
 * USER SCHEMA
 * This defines how a user is stored in our MongoDB database.
 * The schema enforces data structure and validation rules to ensure
 * that each user document contains valid username, email, password, and role fields.
 */
const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true, // No two users can have the same username
    },

    email : {
        type : String,
        required : true,
        unique : true, // No two users can have the same email
    },

    password : {
        type : String,
        required : true,
        // unique: true is removed because passwords don't need to be unique
    },
    
    role : {
        type : String,
        enum : ["user", "artist"], // Only these two roles are allowed
        default : "user",          // New users are "user" by default
    },
});

// Create the model based on the schema
const userModel = mongoose.model("user",userSchema);

module.exports = userModel;