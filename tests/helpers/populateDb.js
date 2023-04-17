const Category = require("../../models/Category");
const {
  Types: { ObjectId },
} = require("mongoose");
const getRandomInt = require("./getRandomInt");
const getProductStub = require("../stubs/getProduct.stub");
const Provider = require("../../models/Provider");
const Product = require("../../models/Product");
module.exports = async ({ n_categories = 0, n_products = 0} = {n_categories: 0, n_products: 0}) => {
  const categories = [
    {
      _id: new ObjectId(),
      name: "DEFAULT CATEGORY",
    },
  ];
  for (let i = 0; i < n_categories - 1; i++) {
    categories.push({
      _id: new ObjectId(),
      name: `${Math.random()}`,
    });
  }
  const default_provider = {
    _id: new ObjectId(),
    name: "DEFAULT PROVIDER",
    email: "emailMath.gmail.com",
    phone: "143443322",
    address: "deafeafea",
    ruc: "12542312323",
  };
  const products = [getProductStub({ category: categories[0]._id, provider: default_provider._id, name: "DEFAULT PRODUCT" })];
  for (let i = 0; i < n_products - 1; i++) {
    const randomIndexCategory = getRandomInt(0, categories.length);
    products.push(getProductStub({category: categories[randomIndexCategory]._id, provider: default_provider}));
  }
  await Promise.all([Category.insertMany(categories), Provider.create(default_provider), Product.insertMany(products)]);
};
