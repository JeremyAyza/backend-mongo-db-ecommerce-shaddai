const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 200,
		unique: true
	},
	description: {
		type: String,
		required: true,
		maxlength: 2000
	},
	price: {
		type: Number,
		trim: true,
		required: true,
		maxlength: 32
	},
	purchase_price: {
		type: Number,
		trim: true,
		required: true,
		maxlength: 32
	},
	category: {
		type: ObjectId,
		ref: 'Category',
		required: true
	},
	quantity: {
		type: Number,
		default:0,
		min:0,
	},
	sold: {
		type: Number,
		default: 0
	},
	photo: {
		type: String,
		required: true,
	},
	provider: {
		type: ObjectId,
		ref: 'Provider',
		require:true
	}
	

}, {
	timestamps: true
});


Product = mongoose.model('Product', ProductSchema)

module.exports = Product