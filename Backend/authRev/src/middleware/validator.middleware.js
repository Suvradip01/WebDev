const { body, validationResult } = require('express-validator');

/**
 * VALIDATION RULES FOR REGISTRATION
 */ 
const registerValidator = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    
    body('email')
        .trim()
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

/**
 * VALIDATION RULES FOR LOGIN
 */
const loginValidator = [
    body('email').optional().isEmail().withMessage('Invalid email format'),
    body('username').optional().notEmpty().withMessage('Username cannot be empty'),
    body('password').notEmpty().withMessage('Password is required'),
];

/**
 * MIDDLEWARE TO CATCH AND SEND ERRORS
 * This function checks if express-validator found any issues.
 * If yes, it stops the request and sends the errors back.
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next(); // Everything is fine, move to the controller
    }
    
    // Return the first error message found
    return res.status(400).json({ 
        message: errors.array()[0].msg,
        errors: errors.array() 
    });
};

module.exports = {
    registerValidator,
    loginValidator,
    validate
};
