const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const PurchaseSchema = new mongoose.Schema({
	provider: {
		type: ObjectId,
		ref: 'Provider',
		required: true
	},
	products: [
		{
			product: {
				type: ObjectId,
				ref: 'Product',
				required: true
			},
			quantity: {
				type: Number,
				required: true
			},
			purchase_price: {
				type: Number,
				required: true
			}
		}
	],
	
	notes: {
		type: String,
		default:""
	}
}, {
	timestamps: true
});

PurchaseSchema.virtual('totalAmount').get(() => {
	return this.products.reduce((total, product) => {
		return total + (product.quantity * product.purchase_price);
	}, 0);
});


module.exports = Purchase = mongoose.model('Purchase', PurchaseSchema);
