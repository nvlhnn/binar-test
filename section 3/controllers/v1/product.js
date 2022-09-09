const { Product } = require("../../models");
const setResponse = require("../../helpers/response");

class ProductController {
  static create = async (req, res, next) => {
    try {
      const data = await Product.create(req.body);

      res.status(201).json(setResponse("OK", data, {}));
    } catch (error) {
      next(error);
    }
  };

  static show = async (req, res, next) => {
    try {
      const data = await Product.findAll();

      res.status(200).json(setResponse("OK", data, {}));
    } catch (error) {
      next(error);
    }
  };

  static showById = async (req, res, next) => {
    try {
      const data = await Product.findOne({ where: { id: req.params.id } });

      res.status(200).json(setResponse("OK", data, {}));
    } catch (error) {
      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const data = await Product.findOne({
        where: { id: req.params.id },
      });

      if (!data) {
        throw {
          code: 404,
          status: "Resource not found",
          errors: `Product with ID ${req.params.id} not found`,
        };
      }

      await data.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });

      await data.save();

      res.status(201).json(setResponse("OK", data, {}));
    } catch (error) {
      next(error);
    }
  };

  static delete = async (req, res, next) => {
    try {
      const data = await Product.findOne({
        where: { id: req.params.id },
      });

      if (!data) {
        throw {
          code: 404,
          status: "Resource not found",
          errors: `Product with ID ${req.params.id} not found`,
        };
      }

      await Product.destroy({ where: { id: req.params.id } });
      res
        .status(200)
        .json(setResponse("OK", { message: `${req.params.id} deleted` }, {}));
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ProductController;
