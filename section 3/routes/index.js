const router = require("express").Router();

const v1 = require("./v1/index");
const v2 = require("./v2/index");
const auth = require("./auth");

router.use("/auth", auth);
router.use("/v1", v1);
router.use("/v2", v2);

router.get("/", (req, res) => res.status(404).json("No API route found"));

module.exports = router;
