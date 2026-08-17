const jwt = require("jsonwebtoken");

/**
 * MIDDLEWARE: userAuth
 * Ensures that the person making the request is logged in.
 * They MUST have a valid JWT token in their cookies.
 */
function userAuth(req, res, next) {
    // 1. Grab the token from the cookie
    const token = req.cookies.token;

    // 2. If no token exists, block the request
    if (!token) return res.status(401).json({ message: "Unauthorized - Please login" });

    try {
        // 3. Try to verify (decrypt) the token using our secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // 4. If valid, save the user's data into the 'req' object
        // This makes 'req.user.id' and 'req.user.role' available in the next function
        req.user = decoded;
        
        // 5. Success! Move to the next function (the controller)
        next();
    } catch (err) {
        // If the token is fake or expired, block the request
        res.status(401).json({ message: "Invalid Token - Please login again" });
    }
}

/**
 * MIDDLEWARE: artistAuth
 * A stricter guard. Not only must they be logged in, 
 * but their role must be "artist".
 */
function artistAuth(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized - Please login" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // CHECK ROLE: If they are NOT an artist, block them (403 Forbidden)
        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "Access denied. Only Artists can upload music." });
        }
        
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid Token" });
    }
}

module.exports = { userAuth, artistAuth };
