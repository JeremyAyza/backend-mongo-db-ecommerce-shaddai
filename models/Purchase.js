const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const PurchaseSchema = new mongoose.Schema({
	user: { 
		type: ObjectId,
		ref: 'User',
		require: true 
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
			}	
		}
	],
	description: {
		type: String,
		default:""
	},
	totalAmount: {
		type: Number,
		default: 0
	}
}, {
	timestamps: true
});



// Función que se ejecuta antes de guardar o actualizar una compra
PurchaseSchema.pre('save', async function (next) {
	try {
		let totalAmount = 0;
		// Recorre todos los productos de la compra y calcula el totalAmount
		for (let i = 0; i < this.products.length; i++) {
			const product = await mongoose.model('Product').findById(this.products[i].product);
			totalAmount += product.price * this.products[i].quantity;
		}
		this.totalAmount = totalAmount;
		next();
	} catch (error) {
		next(error);
	}
});

//PurchaseSchema.virtual('totalAmount').get(function () {
//	return this.products.reduce((total, product) => {
//		return total + (product.quantity * product.product.purchase_price);
//	}, 0);
//});


//purchaseSchema.post('save', async function () {
//	const Product = mongoose.model('Producto');
//	for (const item of this.productos) {
//		await Product.updateOne({ _id: item.producto }, { $inc: { stock: +item.cantidad } });
//	}
//});


module.exports = Purchase = mongoose.model('Purchase', PurchaseSchema);
