const requestedTime = (req, res, next) => {
  const day = new Date();
  res.on("finish", () => {
    const duration = new Date() - day;
    console.log(`La richiesta ${req.method} ha impiegato ${duration} ms`);
  });

  next();
};

module.exports = requestedTime;
