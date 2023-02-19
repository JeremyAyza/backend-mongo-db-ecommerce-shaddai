const mongoose = require('mongoose');
const Product = require('../models/Product');


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
      let product = await Product.findById(id).populate('category');

      if (!product) {
         req.error = {
            status: 404,
            message: 'Product not found'
         };
         return next();
      }

      req.product = product;

   } catch (err) {
      console.log(err);

      // Seteo el error
      req.error = {};
   } finally {
      next();
   }
}