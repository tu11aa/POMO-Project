const helper = require("../helpers/helper");

//handle error, more info when develop product
const errorHandler = (err, req, res, next) => {
  const status_code = res.statusCode ? res.statusCode : 500;
  res
    .status(status_code)
    .json(
      helper.res(
        false,
        null,
        err.message,
        process.env.NODE_ENV === "production" ? null : err.stack
      )
    );
  next();
};

module.exports = { errorHandler };
