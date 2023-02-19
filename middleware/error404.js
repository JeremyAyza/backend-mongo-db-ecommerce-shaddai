module.exports = (req, res, next) => {

   !req.error &&
      (req.error = {
         status: 404,
         message: 'Page not found'
      })

   next();
}