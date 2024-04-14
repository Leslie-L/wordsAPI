function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      res.status(404).json({
        message:error
      })
    }
    next();
  }
}

module.exports = validatorHandler;
