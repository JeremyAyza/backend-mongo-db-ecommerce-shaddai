const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const Purchase = require('../models/Purchase');
const { auth, adminAuth, purchaseById } = require('../middleware');
const Product = require('../models/Product');

const purchaseRouter=Router()

//FUNCION PARA ACTUALIZAR EL STOCK DE CADA PRODUCTO
//QUE SE USARÁ EN DIFERENTES OPERCIONES
const updateProductsStock = async (purchase, operation) => {
	try {
		// Recorre todos los productos de la compra
		for (const product of purchase.products) {
			// Si la operación es 'delete', resta la cantidad de productos eliminados al stock
			if (operation === 'delete') {
				await Product.updateOne({ _id: product.product._id }, { $inc: { quantity: -product.quantity } });
				// Si la operación es 'create', suma la cantidad de productos comprados al stock
			} else if (operation === 'create') {
				await Product.updateOne({ _id: product.product._id }, { $inc: { quantity: +product.quantity } });
			}
			// Si la operación es 'update', calcula la diferencia de cantidad y actualiza el stock en consecuencia
			else if (operation === 'update') {
				const purchaseDB = await Purchase.findById(purchase._id);
				const productDB = purchaseDB.products.find(prod => prod._id.toString() === product._id.toString());
				const diff = product.quantity - productDB.quantity;
				if (diff > 0) {
					await Product.updateOne({ _id: product._id }, { $inc: { quantity: +diff } });
				} else if (diff < 0) {
					await Product.updateOne({ _id: product._id }, { $inc: { quantity: -diff } });
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
}
purchaseRouter.get('/all', auth, adminAuth, async (req, res, next) => {
	if (req.error) return next()

	try {
		const purchases = await Purchase.find()
			.populate('products.product', 'name price category provider purchase_price').lean({ virtuals: true })
			.populate('user', 'name')

		res.json(purchases);
	} catch (error) {
		console.error(error);
		next();
		res.status(500).json({ message: 'Error en el servidor' });
	}
});

purchaseRouter.post('/', [
	check('products', 'El campo Products es requerido').isArray({ min: 1 }).exists(),
	check('products', 'Cada Producto en el campo Products requiere un atributo "product" y "quantity", "totalAmount": [{ product, quantity, totalAmount }]')
		.custom(products => {
			let err = products.filter(e => {
				if (!e.product || !e.quantity) return e;
			});

			return !err.length;
		})

], auth, adminAuth, async (req, res, next) => {

	if (req.error) return next();

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		req.error = { status: 400, errors };
		return next();
	}
		
	try {
		// Crea la compra con los datos recibidos en el body de la petición
		const { products } = req.body;

		const purchase = new Purchase({ products });
		// Guarda la compra en la base de datos
		await purchase.save();
		// Actualiza el stock de los productos en la compra
		await updateProductsStock(purchase, 'create');
    // Retorna un mensaje de éxito

		
		res.status(201).json({ message: 'Compra creada exitosamente' });

	} catch (error) {

		console.log(error);
		req.error = {};
		next();
	}
});


purchaseRouter.delete('/:id', auth, adminAuth,async (req, res,next) => {
	if (req.error) return next();

	try {
		const deletePurchase = await Purchase.findByIdAndRemove(req.params.id);

		if (!deletePurchase) {
			return res.status(404).json({
				success: false,
				message: 'Compra no encontrada',
			});
		}

		// Actualizar la cantidad de cada producto
		await updateProductsStock(deletePurchase, 'delete');

		res.status(200).json({ message: 'Compra eliminada exitosamente' });
	} catch (error) {
		console.error(error);
		req.error={}
		next()
	}
});


purchaseRouter.put('/:id',  [
	check('products', 'El campo Products es requerido').isArray({ min: 1 }).exists(),
	check('products', 'Cada Producto en el campo Products requiere un atributo "product" y "quantity", "totalAmount": [{ product, quantity, totalAmount }]')
		.custom(products => {
			let err = products.filter(e => {
				if (!e.product || !e.quantity ) return e;
			});

			return !err.length;
		})
], auth, adminAuth, async (req, res,next) => {

	if (req.error) return next();

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		req.error = { status: 400, errors };
		return next();
	}


	const { user, description, products, paid } = req.body;
	const id = req.params.id ;

	try {
		const purchase = await Purchase.findByIdAndUpdate(id, { user, description, products, paid })

		if (!purchase) {
			return res.status(404).json({
				success: false,
				message: 'Compra no encontrada',
			});
		}
	
		// Actualizar la cantidad de cada producto
		await updateProductsStock(purchase, 'update');


		res.json({ message: 'Compra actualizada exitosamente' });
	} catch (error) {
		console.error(error);
		req.error = {};
		next();
	}
});

purchaseRouter.get('/:id',purchaseById,(req, res,next) => {
	if (req.error) return next();
	return (
		res.json(req.purchase)
			
	)
});






module.exports = purchaseRouter;