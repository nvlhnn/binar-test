const { User } = require("../models");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const setResponse = require("../helpers/response");

class AuthController {
  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        throw {
          code: 400,
          message: "Bad Request",
          errors: "Invalid email or password",
        };
      }

      if (bcrypt.compareSync(req.body.password, user.password_digest)) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
          },
          process.env.JWT_SECRET
        );

        const response = setResponse("OK", { access_token: token }, {});
        res.status(200).json(response);
      } else {
        throw {
          code: 400,
          message: "Bad Request",
          errors: "Invalid email or password",
        };
      }
    } catch (err) {
      next(err);
    }
  }

  static register = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (user) {
        throw {
          code: 400,
          message: "Bad Request",
          errors: "Email already in use",
        };
      }

      const createdUser = await User.create({
        name: name,
        email: email,
        password_digest: bcrypt.hashSync(password, salt),
      });

      const response = setResponse("OK", createdUser, {});
      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
