const SERVER_ERROR = {
   status: 500,
   message: 'Server Error :('
}

module.exports = (req, res) => {
   if (req.error.errors)
      return res.status(400).json({ message: "Validation error", errors: req.error.errors.errors });

   const status = req.error.status || SERVER_ERROR.status;
   const message = req.error.message || SERVER_ERROR.message;

   res.status(status).json(message);
}