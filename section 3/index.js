const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
const router = require("./routes/index.js");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// require("./config/passport")(app);
app.use(router);

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`app listening on port ${port}`);
});
