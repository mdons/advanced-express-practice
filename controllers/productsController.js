let products = require("../products");

const list = () => {
  return products;
};

const show = id => {
  return products.find(p => p._id == id);
};

const add = newProduct => {
  newProduct._id = products[products.length - 1]._id + 1;
  products.push(newProduct);
  return products;
};

module.exports = {
  list,
  show,
  add
};
