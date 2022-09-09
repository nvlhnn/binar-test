const authController = require("../controllers/auth.js");
const { registerRule, loginRule } = require("../validation/auth.scheme.js");
const validator = require("../validation/validator.js");
const router = require("express").Router();

router.post("/signup", validator(registerRule), authController.register);
router.post("/login", validator(loginRule), authController.login);

module.exports = router;
