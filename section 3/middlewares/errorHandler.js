const setResponse = require("../helpers/response");

function errorHandler(err, req, res, next) {
  console.log(err);
  if (err.code) {
    const response = setResponse(err.message, {}, err.errors ?? {});
    res.status(err.code).json(response);
  } else {
    const response = setResponse("Internal Server Error", {}, {});
    res.status(500).json(response);
  }
}

module.exports = errorHandler;
