const { check } = require("express-validator");

const createRule = [
  check("name").notEmpty().withMessage("name is required"),
  check("price")
    .notEmpty()
    .withMessage("price is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("price must be a number and higher that 0"),
  check("imageurl").notEmpty().withMessage("imageurl is required"),
];

module.exports = { createRule };
