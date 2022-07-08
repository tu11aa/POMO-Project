//handle error, more info when develop product
const errorHandler = (err, req, res, next) => {
  const status_code = res.statusCode ? res.statusCode : 500;
  res.status(status_code);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
