const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const Purchase = require('../models/purchase');
const { auth, adminAuth,  } = require('../middleware');

const purchaseRouter=Router()
purchaseRouter.post('/', [
	check('products', 'El campo Products es requerido').isArray({ min: 1 }).exists(),
	check('products', 'Cada Producto en el campo Products requiere un atributo "productId" y "quantity", "totalAmount": [{ productId, quantity, totalAmount }]')
		.custom(products => {
			let err = products.filter(e => {
				if (!e.productId || !e.quantity || e.totalAmount) return e;
			});

			return !err.length;
		})
], auth, adminAuth,async (req, res) => {
	if (req.error) return next();

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		req.error = { status: 400, errors };
		return next();
	}

	const { provider,notes,products } = req.body;

	try {
		const purchase = new Purchase({ provider, notes, products });
		await purchase.save();

		// Actualizar la cantidad de cada producto
		for (const { productId, quantity } of products) {
			const product = await Product.findByIdAndUpdate(productId, {
				$inc: { quantity: +quantity },
			})

			if (!product) {
				req.error = { status: 400, message: "Ningúno de los productos indicados están en stock" };
				return next();
			}
		}


		
		res.status(201).json({ message: 'Compra creada exitosamente' });
	} catch (error) {
		console.log(err);
		req.error = {};
		next();
	}
});








purchaseRouter.delete('/:id', auth, adminAuth,async (req, res) => {
	if (req.error) return next();

	try {
		const purchase = await Purchase.findById(req.params.id);

		if (!purchase) {
			return res.status(404).json({
				success: false,
				message: 'Compra no encontrada',
			});
		}

		// Actualizar la cantidad de cada producto
		for (const { productId, quantity } of purchase.products) {
			const product = await Product.findByIdAndUpdate(productId, {
				$inc: { quantity: -quantity },
			});

			if (!product) {
				return res.status(404).json({
					success: false,
					message: 'Producto no encontrado',
				});
			}
		}

		await Purchase.findByIdAndRemove(req.params.id);

		res.status(200).json({ message: 'Compra eliminada exitosamente' });
	} catch (error) {
		console.error(error);
		req.error={}
		next()
	}
});




purchaseRouter.put('/:id',  [
	check('products', 'El campo Products es requerido').isArray({ min: 1 }).exists(),
	check('products', 'Cada Producto en el campo Products requiere un atributo "productId" y "quantity", "totalAmount": [{ productId, quantity, totalAmount }]')
		.custom(products => {
			let err = products.filter(e => {
				if (!e.productId || !e.quantity || e.totalAmount) return e;
			});

			return !err.length;
		})
], auth, adminAuth, async (req, res) => {

	if (req.error) return next();

	const errors = validationResult(req);
	if (!errors.isEmpty()) {

		req.error = { status: 400, errors };
		return next();
	}

	const { provider, notes, products } = req.body;
	const { id } = req.params;

	try {
		const purchase = await Purchase.findById(id);

		if (!purchase) {
			return res.status(404).json({
				success: false,
				message: 'Compra no encontrada',
			});
		}

		// Actualizar la cantidad de cada producto
		for (const { productId, quantity } of purchase.products) {
			const product = await Product.findByIdAndUpdate(productId, {
				$inc: { quantity: -quantity },
			})

			if (!product) {
				return res.status(404).json({
					success: false,
					message: 'Producto no encontrado',
				})
			}
		}

		purchase.provider = provider;
		purchase.notes = notes;
		purchase.products = products;

		await purchase.save();

		// Actualizar la cantidad de cada producto
		for (const { productId, quantity } of products) {
			const product = await Product.findByIdAndUpdate(productId, {
				$inc: { quantity: +quantity },
			})

			if (!product) {
				return res.status(404).json({
					success: false,
					message: 'Producto no encontrado',
				})
			}
		}

		res.json({ message: 'Compra actualizada exitosamente' });
	} catch (error) {
		console.error(error);

		console.log(err);
		req.error = {};
		next();
	}
});

purchaseRouter.get("/provider", auth, adminAuth, async (req, res, next) => {

	if (req.error) return next();

	try {
		const purchases = await Order.find({ provider: req.provider.id });
		res.status(200).json(purchases);
	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});

purchaseRouter.get('/', auth, adminAuth, async (req, res) => {
	if (req.error) return next();

	try {
		const purchases = await Purchase.find().populate('provider products.product');

		res.json(purchases);
	} catch (error) {
		console.error(error);
		next();
		res.status(500).json({ message: 'Error en el servidor' });
	}
});

// GET /purchases/:id
purchaseRouter.get('/:id', async (req, res) => {
	if (req.error) return next();

	try {
		const purchase = await Purchase.findById(req.params.id)
			.populate('provider', 'name')
			.populate('products.product');
		if (!purchase) {
			req.error={status:404, message: 'Compra no encontrada' }
			return next();


		}
		return res.json(purchase);
	} catch (error) {
		console.error(error);
		next();
		return res.status(500).json({ message: 'Error en el servidor' });
	}
});





module.exports = purchaseRouter;