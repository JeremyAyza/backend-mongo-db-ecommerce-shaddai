const mongoose = require('mongoose');
const Provider = require('../models/Provider');


module.exports = async (req, res, next) => {
   const { id } = req.params;

   if (req.error) return next();

   if (!mongoose.Types.ObjectId.isValid(id)) {
      req.error = {
         status: 400,
         message: 'Id provided is not valid'
      };
      return next();
   }

   try {
      let provider = await Provider.findById(id).populate('producto');

      if (!provider) {
         req.error = {
            status: 404,
            message: 'Provider not found'
         };
         return next();
      }

      req.provider = provider;

   } catch (err) {
      console.log(err);

      // Seteo el error
      req.error = {};
   } finally {
      next();
   }
}