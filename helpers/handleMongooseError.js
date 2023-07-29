const handleMongooseError = (er, data, next) => {
  er.status = 400;
  next();
};

module.exports = handleMongooseError;
