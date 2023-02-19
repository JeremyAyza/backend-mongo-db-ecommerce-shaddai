const mongoose = require('mongoose');
const Category = require('../models/Category');

module.exports = async (req, res, next) => {
   const { id } = req.params;

   // Valido si el id se corresponde con un objeto ObjectId
   if (!mongoose.Types.ObjectId.isValid(id)) {
      req.error = {
         status: 400,
         message: 'Id provided is not valid'
      };
      return next();
   }

   try {
      let category = await Category.findById(id);

      if (!category) {
         req.error = {
            status: 404,
            message: 'Category not found'
         };
         return next();
      }

      req.category = category;

   } catch (error) {
      console.log(error);

      // Seteo el error
      req.error = {
         status: 500,
         message: 'Server Error :('
      };
   } finally {

      // Finalmente paso al siguiente middleware
      next();
   }
}