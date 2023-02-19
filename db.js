const mongoose = require('mongoose');
const { DB: { MONGO_URL } } = require('./config');
// const Product = require('./models/Product');
// const PRODUCTS = require("./data/products");
// const Category = require('./models/Category');
// const CATEGORIES = require("./data/categories");

const connectDB = async () => {
   try {
      const connection = await mongoose.connect(MONGO_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });

      console.log(`MongoDB Connected: ${connection.connection.host}`)
      // let categories = CATEGORIES.map(e => new Category(e));
      // await Category.bulkSave(categories);
      // let products = PRODUCTS.map(e => new Product(e));
      // await Product.bulkSave(products);
   } catch (err) {
      console.log(`No ha sido posible realizar una conexión con la BBDD`);
      console.log(`Error: ${err.message}`);
   }
}


module.exports = connectDB;