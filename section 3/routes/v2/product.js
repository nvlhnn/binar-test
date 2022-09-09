const productController = require("../../controllers/v2/product.js");
const router = require("express").Router();
const auth = require("../../middlewares/auth");

router.get("/", auth, productController.show);

module.exports = router;
