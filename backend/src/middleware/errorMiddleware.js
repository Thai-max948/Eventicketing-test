const errorMiddleware = (err, req, res, _next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
};

module.exports = errorMiddleware;