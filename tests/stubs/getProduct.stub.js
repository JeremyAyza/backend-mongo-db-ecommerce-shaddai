module.exports = ({category, provider, ...restProperties})   => {
  return {
    name: `${Math.random()}`,
    description: "aedfeaf",
    price: 213,
    category,
    provider,
    quantity: 10,
    photo: "feafea",
    purchase_price: 200,
    ...restProperties
  }
}