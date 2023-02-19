const mongoose = require('mongoose');
const { PENDING } = require('../helpers/constants');
const { ObjectId } = mongoose.Schema;

const UserSchema = new mongoose.Schema({
	country: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true,
	},
	reference: {
		type: String,
		required: true
	},
	userId: {
		type: ObjectId,
		ref: 'User',
		required: true
	},
	totalAmount: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		required: true,
		default: PENDING
	},
	paid: {
		type: Boolean,
		required: true,
		default: false
	},
	products: [
		{
			productId: {
				type: ObjectId,
				ref: 'Product',
				required: true
			},
			quantity: {
				type: Number,
				default: 1,
			},
		},
	],
}, {
	timestamps: true
})

module.exports = User = mongoose.model('Order', UserSchema);