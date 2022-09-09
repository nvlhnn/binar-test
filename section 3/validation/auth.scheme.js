const { check } = require("express-validator");
const { User } = require("../models");

const registerRule = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email not valid")
    .bail()
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("Email Already Taken");
        }
      });
    }),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .trim()
    .escape(),
];

const loginRule = [
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Email not valid")
    .bail(),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .trim()
    .escape(),
];

module.exports = { loginRule, registerRule };
