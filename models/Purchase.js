const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const PurchaseSchema = new mongoose.Schema({
	user: { type: ObjectId, ref: 'User',required: true },
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
			}	
		}
	],
	description: {
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

//purchaseSchema.post('save', async function () {
//	const Product = mongoose.model('Producto');
//	for (const item of this.productos) {
//		await Product.updateOne({ _id: item.producto }, { $inc: { stock: +item.cantidad } });
//	}
//});


module.exports = Purchase = mongoose.model('Purchase', PurchaseSchema);
