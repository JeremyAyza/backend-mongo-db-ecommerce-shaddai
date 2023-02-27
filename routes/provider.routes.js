const { Router } = require('express');
const Provider = require('../models/Provider');
console.log(Provider);
const { auth, adminAuth, providerById } = require('../middleware');
const mongoose = require('mongoose');


const providerRouter=Router()


providerRouter.post('/', auth, adminAuth, async (req, res, next) => {
	if (req.error) return next();

	// cheking all fields
	const { name, email, address, phone, ruc } = req.body;

	if (!name || !email || !address || !phone || !ruc ) {
		req.error = {
			status: 400,
			message: 'All fields are required'
		}
		return next();
	}

	let provider;
	try {
		provider = await Provider.findOne({ ruc });

		if (provider) {
			req.error = {
				status: 400,
				message: 'Provider already exists'
			}
			return next();
		}
	} catch (err) {
		console.log(err);
		req.error = {};
		return next();
	}

	try {
		provider = new Provider({ name, email, address, phone, ruc  });
		await provider.save();

		res.status(201).json('Provider Created Successfully');

	} catch (err) {
		console.log(err);
		req.error = {};
		next();
	}
});

// Ruta GET para obtener todos los proveedores
providerRouter.get('/all', async (req, res, next) => {
	try {
		// Buscamos todos los proveedores
		console.log('consulta all provider');
		const providers = await Provider.find()
		
		// Enviamos la respuesta con los proveedores
		res.json(providers);
	} catch (err) {
		console.log(err);
		// Si hay un error, lo guardamos en el objeto req.error para manejarlo en el middleware posteriormente
		req.error = {};
		next();
	}
});

providerRouter.get('/search', async (req, res, next) => {
	let { search } = req.query;
	const query = {};

	if (search) {
		query.name = {
			$regex: search,
			$options: 'i'
		}
	}

	try {
		let providers = await Provider.find(query).sort([
				["name", "asc"]
			]);
		res.json(providers);
	} catch (err) {
		console.log(err);
		req.error = {
			status: 500,
			message: 'Invalid querys'
		};
		next();
	}
});

providerRouter.get('/:id', providerById, (req, res, next) => {

	if (req.error) return next();

	return res.json(req.provider);
});

providerRouter.delete('/:id', auth, adminAuth, providerById, async (req, res, next) => {

	if (req.error) return next();

	let provider = req.provider;
	try {
		let deleteProvider = await provider.remove();
		res.json({
			message: `${deleteProvider.name} deleted successfully`,
		});
	} catch (error) {
		console.log(error);

		req.error = {};
		next();
	}
});

providerRouter.put('/:id', auth, adminAuth, providerById, async (req, res, next) => {
	if (req.error) return next();

	let provider = req.provider;
	const { name, email, address, phone, ruc } = req.body;

	name && (provider.name = name.trim());
	email && (provider.email = email.trim());
	address && (provider.address = address.trim());
	phone && (provider.phone = phone.trim());
	ruc && (provider.ruc = ruc.trim());

	try {
		await provider.save();
		res.json("Proveedor actualizado exitosamente");
	} catch (err) {
		console.log(err);

		req.error = {};
		next();
	}
})

//TRAER A LOS PRODUCTOS DE UN PROVEEDOR ESPECIFICO
providerRouter.get('/:id/productos', auth, adminAuth, async (req, res) => {
	const proveedorId = req.params.id;
	const productos = await Producto.find({ proveedor: proveedorId }).populate('proveedor');
	res.json(productos);
});

module.exports = providerRouter;


