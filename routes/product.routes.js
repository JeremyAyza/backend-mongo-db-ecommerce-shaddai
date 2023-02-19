const { Router } = require('express');
const Product = require('../models/Product');
const { auth, adminAuth, productById } = require('../middleware');
const mongoose = require('mongoose');


const productRouter = Router();

// @route POST api/product
// @desc Create a Product 
// access Private Admin
productRouter.post('/', auth, adminAuth, async (req, res, next) => {

	if (req.error) return next();

	// cheking all fields
	const { name, description, price, category, quantity, photo } = req.body;

	if (!name || !description || !price || !category || !quantity || !photo) {
		req.error = {
			status: 400,
			message: 'All fields are required'
		}
		return next();
	}

	let product;
	try {
		product = await Product.findOne({ name });

		if (product) {
			req.error = {
				status: 400,
				message: 'Product already exists'
			}
			return next()
		};
	} catch (err) {
		console.log(err);
		req.error = {};
		return next();
	}

	try {
		product = new Product({ name, description, price, category, quantity, photo });

		await product.save()
		res.status(201).json('Product Created Successfully');

	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route GET api/product/all
// @desc Get all products
// @access Public
productRouter.get('/all', async (req, res, next) => {

	try {
		let data = await Product.find({})
			// .select('-photo')
			// .populate('category')
			.sort([
				["name", "asc"]
			])

		res.json(data);
	} catch (err) {
		console.log(err);

		req.error = {};
		next();
	}
})


// @route GET api/product/search
// @desc Get a list products by search and category query
// @access Public
productRouter.get('/search', async (req, res, next) => {
	let { search, category } = req.query;
	const query = {};

	if (search) {
		query.name = {
			$regex: search,
			$options: 'i'
		}

		// assign category
		if (category) {
			if (!mongoose.Types.ObjectId.isValid(category) && category !== 'all') {
				req.error = {
					status: 404,
					message: 'Category not found'
				};
				return next();
			}

			category !== 'all' && (query.category = category);
		}
	}

	try {
		let products = await Product.find(query)
			// .select('-photo')
			.sort([
				["name", "asc"]
			]);
		res.json(products);
	} catch (err) {
		console.log(err);
		req.error = {
			status: 500,
			message: 'Invalid querys'
		};
		next();
	}
});


// @route   GET api/product/filter
// @desc    filter a Product by price and others
// @access  Public
productRouter.get('/filter', async (req, res, next) => {
	let { order = "asc", sortBy = "name", filters } = req.body;
	// limit = parseInt(limit) || 100;
	// Paginado i guess
	// skip = parseInt(skip);

	let findArgs = {};

	// Generamos el objeto con los filtros
	for (let key in filters) {
		if (filters[key].length > 0) {
			if (key === 'price') {
				findArgs[key] = {
					// gte -  greater than price 
					// Exmape: [0,10]
					$gte: req.body.filters[key][0],
					// lte - less than
					$lte: req.body.filters[key][1]
				};
			} else {
				findArgs[key] = req.body.filters[key];
			}
		}
	}
	// console.log(findArgs);
	try {
		let products = await Product.find(findArgs)
			// .select('-photo')
			// .populate('category')
			.sort([
				[sortBy, order]
			])
		// .skip(skip)
		// .limit(limit);

		res.json(products);
	} catch (error) {
		console.log(error);

		req.error = {
			status: 500,
			message: 'Products not found'
		};
		next();
	}
});


// @route GET api/product/:id
// @desc Get a Product information
// @access Public
productRouter.get('/:id', productById, (req, res, next) => {

	if (req.error) return next();

	// req.product.photo = undefined;
	return res.json(req.product);
});


// @route   DELETE api/product/:id
// @desc    Delete a Product
// @access  Private Admin
productRouter.delete('/:id', auth, adminAuth, productById, async (req, res, next) => {

	if (req.error) return next();

	let product = req.product;
	try {
		let deletedProduct = await product.remove();
		res.json({
			message: `${deletedProduct.name} deleted successfully`,
		});
	} catch (error) {
		console.log(error);

		req.error = {};
		next();
	}
});


// @route   PUT api/product/:id
// @desc    Update a Product
// @access  Private Admin
productRouter.put('/:id', auth, adminAuth, productById, async (req, res, next) => {
	if (req.error) return next();

	let product = req.product;

	let { name, description, price, category, quantity, sold, photo } = req.body;
	name && (product.name = name.trim());
	description && (product.description = description.trim());
	price && (product.price = price);
	category && (product.category = category);
	quantity && (product.quantity = quantity);
	sold && (product.sold = sold);
	photo && (product.photo = photo.trim());

	try {
		await product.save();
		res.json("Producto actualizado exitosamente");
	} catch (err) {
		console.log(err);

		req.error = {};
		next();
	}
})

module.exports = productRouter;
