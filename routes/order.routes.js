// Requiero los modelos que necesitaré
const Order = require("../models/Order");
const Product = require('../models/Product');
// requiero mi middleware de autenticación
const { auth, adminAuth } = require('../middleware');
// express-validator para validar las peticiones
const { check, validationResult } = require('express-validator');
const { PENDING, COMPLETED } = require("../helpers/constants");
const User = require("../models/User");
const ObjectID = require("mongodb").ObjectId


const orderRouter = require("express").Router();


// @route POST api/order
// @desc Create a Order 
// access Private
orderRouter.post("/", [
	check('country', 'El campo Country es requerido').trim().not().isEmpty(),
	check('city', 'El campo City es requerido').trim().not().isEmpty(),
	check('address', 'El campo Address es requerido').trim().not().isEmpty(),
	check('reference', 'El campo Reference es requerido').trim().not().isEmpty(),
	check('products', 'El campo Products es requerido').isArray({ min: 1 }).exists(),
	check('products', 'Cada Producto en el campo Products requiere un atributo "productId" y "quantity": [{ productId, quantity }]')
		.custom(products => {
			let err = products.filter(e => {
				if (!e.productId || !e.quantity) return e;
			});

			return !err.length;
		})
], auth, async (req, res, next) => {

	if (req.error) return next();

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		req.error = { status: 400, errors };
		return next();
	}

	// El id lo sacamos del token
	const { country, city, address, reference, products } = req.body;
	// products: [{ productId, quantity }]
	// console.log(products);
	try {
		let totalAmount = 0;
		let productsExist = await Promise.all(products.map(async (e) => {
			// Valido que se me haya proporcionado un id válido
			if (!ObjectID.isValid(e.productId)) return null;

			let product = await Product.findById(e.productId);
			if (product) {
				let aux = product;
				product = product.toJSON();
				// console.log(product);
				if (product.quantity === 0) return null;
				e.quantity = e.quantity <= product.quantity ? e.quantity : product.quantity;
				// console.log(product)
				// console.log(e.quantity)
				// console.log(product.price)
				totalAmount += (e.quantity * product.price);
				let auxCantidad = product.quantity;
				let auxVendidos = product.sold;
				// actualizo la cantidad
				aux.quantity = auxCantidad - e.quantity;
				aux.sold = auxVendidos + e.quantity;
				await aux.save();
				// console.log(aux.toJSON());
				return { ...e };
			}
			return null;
		}));

		//quito los productos que no existen
		productsExist = productsExist.filter(e => e);
		// console.log(productsExist);
		// console.log(totalAmount);
		if (!productsExist.length) {
			req.error = { status: 400, message: "Ningúno de los productos indicados están en stock" };
			return next();
		}

		let newOrder = new Order({ userId: req.user.id, country, city, address, reference, products: productsExist, totalAmount: Math.round(totalAmount * 100) / 100 });
		await newOrder.save();
		res.json(newOrder);
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route PUT api/order/:id
// @desc Edit an Order
// access Private Admin
orderRouter.put("/:id", [
	check('status', `El campo Status sólo puede tomar los valores: ${PENDING} o ${COMPLETED}`).trim().optional().custom(e => {
		return [PENDING, COMPLETED].includes(e);
	}),
], auth, adminAuth, async (req, res, next) => {

	if (req.error) return next();

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		req.error = { status: 400, errors };
		return next();
	}

	// Elimino los campos que no se podrían modificar:
	delete req.body._id
	delete req.body.updatedAt
	delete req.body.createdAt
	// console.log(req.body);

	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedOrder);
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route DELETE api/order/:orderId
// @desc Delete an Order
// access Private
orderRouter.delete("/:orderId", auth, async (req, res, next) => {

	if (req.error) return next();

	try {
		let order = await Order.findById(req.params.orderId);
		if (order) {
			order = order.toJSON();
			//Restablezco los valores
			await Promise.all(order.products.map(async (e) => {
				console.log(e);
				let product = await Product.findById(e.productId);
				if (product) {
					let aux = product;
					product = product.toJSON();

					// actualizo la cantidad devolviendo lo restado antes
					console.log(aux.toJSON())
					console.log(e)
					aux.quantity = product.quantity + e.quantity;
					aux.sold = product.sold - e.quantity;
					console.log(aux.toJSON())
					await aux.save();
					return { ...e };
				}
				return null;
			}))

			// Finalmente elimino la orden
			order = await Order.findByIdAndDelete(req.params.orderId);
		} else {
			return res.status(404).json("Order not found");
		}

		res.status(200).json("Order has been deleted...");
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route GET api/order/user
// @desc Get all orders of an user
// access Private
orderRouter.get("/user", auth, async (req, res, next) => {

	if (req.error) return next();

	try {
		const orders = await Order.find({ userId: req.user.id });
		res.status(200).json(orders);
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route GET api/order
// @desc Get all orders
// access Private Admin
orderRouter.get("/", auth, adminAuth, async (req, res, next) => {

	if (req.error) return next();

	try {
		let orders = await Order.find({});
		if (orders.length) {
			orders = await Promise.all(orders.map(async (order) => {
				order = order.toJSON();
				// De cada orden, traigo la info de cada producto
				let products = await Promise.all(order.products.map(async (prod) => {
					let finded = await Product.findById(prod.productId)
						.select('_id name price')
					finded = finded && finded.toJSON();

					return finded ? { ...finded, quantity: prod.quantity } : null;
				}));
				products = products.filter(e => e);
				let user = await User.findById(order.userId).select("name lastname");
				delete order.userId;
				return { ...order, products, user };
			}))
		}

		res.status(200).json(orders);
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route GET api/order/income
// @desc GET MONTHLY INCOME
// access Private Admin
orderRouter.get("/income", auth, adminAuth, async (req, res, next) => {

	if (req.error) return next();

	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
		const income = await Order.aggregate([
			{
				$match:
					{ createdAt: { $gte: previousMonth } }
			},
			{
				$project: {
					month: { $month: "$createdAt" },
					sales: "$totalAmount",
				},
			},
			{
				$group: {
					_id: "$month",
					total: { $sum: "$sales" },
				},
			},
		]);
		res.status(200).json(income);
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


// @route GET api/order/:orderId
// @desc Get order detail
// access Private
orderRouter.get("/:orderId", auth, async (req, res, next) => {

	const { orderId } = req.params;

	if (req.error) return next();

	if (!ObjectID.isValid(orderId)) {
		req.error = { status: 400, message: "Id no válido" };
		return next();
	};

	try {
		let order = await Order.findById(orderId);

		if (!order) {
			req.error = { status: 404, message: "Pedido no encontrado" };
			return next();
		}

		let productos = await Promise.all(order.products.map(async (prod) => {
			let finded = await Product.findById(prod.productId)
				.select('name price')
			finded = finded && finded.toJSON();

			return finded ? { ...finded, quantity: prod.quantity } : null;
		}));
		order = order.toJSON();

		productos = productos.filter(e => e);

		res.status(200).json({ ...order, products: productos });
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});


module.exports = orderRouter;
