const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
		default:"https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
	},
	role: {
		// Determina los privilegios que tiene (normal:0 o admin:1 bloqueado: 3)
		type: Number,
		required: true,
		default: 0
	},
	dni:{
		type: String,
		default:"88776633",
		maxlength: 8,
	},
	phone: {
		type: String,
		default:"999888777",
		maxlength: 9,
	}
	
},
{
	timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);