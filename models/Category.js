const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true
   },
}, {
   timestamps: false
});

module.exports = Category = mongoose.model('Category', CategorySchema)