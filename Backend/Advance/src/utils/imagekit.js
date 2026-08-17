const ImageKit = require("imagekit");

/**
 * IMAGEKIT CONFIGURATION
 * This utility connects our backend to the ImageKit Cloud service.
 * It allows us to upload and manage files in the cloud.
 */
const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,     // Your public identifier
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,   // Your secret key (keep it safe!)
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT  // Your custom ImageKit URL (ik.imagekit.io/...)
});

module.exports = imagekit;
