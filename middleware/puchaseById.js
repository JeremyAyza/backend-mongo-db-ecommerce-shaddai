const mongoose = require('mongoose');
const Purchase = require('../models/Purchase');


module.exports = async (req, res, next) => {
	const id  = parseInt(req.params.id) ;

	if (req.error) return next();

	if (!mongoose.Types.ObjectId.isValid(id)) {
		req.error = {
			status: 400,
			message: 'Id provided is not valid'
		};
		return next();
	}

	try {
		let purchase = await Purchase.findById(id)
		.populate('products.product')
		.populate('user','name',);

		if (!purchase) {
			req.error = {
				status: 404,
				message: 'Purchase not found'
			};
			return next();
		}

		req.purchase = purchase;

	} catch (err) {
		console.log(err);

		// Seteo el error
		req.error = {};
	} finally {
		next();
	}
}