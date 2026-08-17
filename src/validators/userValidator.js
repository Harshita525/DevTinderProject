const { body } = require("express-validator");

const userValidation = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First Name is required!"),

    body("lastName")
        .trim(),

    body("email")
        .trim()
        .toLowerCase()
        .isEmail()
        .withMessage("Please enter a valid email!"),

    body("gender")
        .trim()
        .optional()
        .toLowerCase()
        .isIn(["male", "female", "other"])
        .withMessage("Gender must be male, female, or other"),

    body("age")
        .isInt({ min: 18, max: 100 })
        .withMessage("Age must be between 18 and 100")
];

module.exports = userValidation;