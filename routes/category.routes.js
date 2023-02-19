const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const Category = require('../models/Category');
// custom middlewares
const { auth, adminAuth, categoryById } = require('../middleware');


const categoryRouter = Router();


// @route POST api/category
// @desc Create Category
// @access Private Admin
categoryRouter.post('/', [
   check('name', 'Name is required').trim().not().isEmpty()
], auth, adminAuth, async (req, res, next) => {
   if (req.error) return next();

   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      req.error = { status: 400, errors };
      return next();
   }

   let { name } = req.body;
   // Para que no se guarde en minúsculas siempre
   name = name.toLowerCase();

   try {
      let category = await Category.findOne({ name });

      // No pueden repetirse los nombres de las categorías
      if (category) {
         req.error = {
            status: 400,
            message: 'Category already exist'
         };
         return next();
      }

      const newCategory = new Category({ name });

      category = await newCategory.save();
      res.status(201).json(category)
   } catch (err) {
      console.log(err);

      req.error = {};
      next();
   }
})


// @route GET api/category/all
// @desc Get all Categories
// @access Public
categoryRouter.get('/all', async (req, res, next) => {
   try {
      let data = await Category.find({});
      res.json(data);
   } catch (err) {
      console.log(err);

      req.error = {};
      next();
   }
})


// @route GET api/category/:id
// @desc Get single Category by id
// @access Public
categoryRouter.get('/:id', categoryById, async (req, res, next) => {
   //si hay errores, lo envío al errorHandler
   if (req.error) return next();

   res.json(req.category);
})


// @route UPDATE api/category/:id
// @desc Update name Category by id
// @access Private Admin
categoryRouter.put('/:id', [
   check('name', 'Name is required').trim().not().isEmpty()
], auth, adminAuth, categoryById, async (req, res, next) => {

   if (req.error) return next();

   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      req.error = { status: 400, errors };
      return next();
   }

   let category = req.category;

   let { name } = req.body;
   name && (name = name.trim());
   name && (category.name = name.toLowerCase());

   try {
      category = await category.save();
      res.json(category);
   } catch (err) {
      console.log(err);

      req.error = {};
      next();
   }
})


// @route DELETE api/category/:id
// @desc Delete Category by id
// @access Private Admin
categoryRouter.delete('/:id', auth, adminAuth, categoryById, async (req, res, next) => {

   if (req.error) return next();;

   let category = req.category;

   try {
      let deletedCategory = await category.remove();
      res.json({
         message: `${deletedCategory.name} deleted successfully`
      });
   } catch (err) {
      console.log(err);
      req.error = {};
      next();
   }
});


module.exports = categoryRouter;