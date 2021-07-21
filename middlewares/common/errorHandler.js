// error handler
const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).json({
      message: err.message,
    });
  } else {
    res.json({
      message: "No error",
    });
  }
};

module.exports = errorHandler;
