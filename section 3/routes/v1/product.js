const productController = require("../../controllers/v1/product");
const router = require("express").Router();
const auth = require("../../middlewares/auth");
const { createRule } = require("../../validation/product.scheme");
const validator = require("../../validation/validator");

router.get("/", auth, productController.show);
router.get("/:id", auth, productController.showById);
router.post("/", [auth, validator(createRule)], productController.create);
router.put("/:id", auth, productController.update);
router.delete("/:id", auth, productController.delete);

module.exports = router;
