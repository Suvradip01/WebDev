const multer = require("multer");

/**
 * MULTER CONFIGURATION
 * We use memoryStorage because we don't want to save the file on our hard drive.
 * Instead, we keep it in RAM (Buffer) and send it directly to ImageKit.
 */
const storage = multer.memoryStorage();

// Initialize multer with the memory storage
const upload = multer({ storage: storage });

module.exports = upload;
