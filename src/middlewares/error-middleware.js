module.exports = (error, req, res, next) => {
  if (error) {
    if (error instanceof HttpError) {
      return res.status(400).json({ message: error.message });
    } else {
      next();
    }
  }
};
