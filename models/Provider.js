const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 50,
		unique:true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		unique: true
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	ruc: {
		type: String,
		required: true,
		minlength:11,
		unique: true,
		trim:true
	},
	
}, {
	timestamps: true
});

module.exports = Provider = mongoose.model('Provider', ProviderSchema);
