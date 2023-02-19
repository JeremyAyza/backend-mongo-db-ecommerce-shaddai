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
	},
	role: {
		// Determina los privilegios que tiene (normal:0 o admin:1 bloqueado: 3)
		type: Number,
		required: true,
		default: 0
	}
},
{
	timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema);