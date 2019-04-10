let vehicles = require("../vehicles");

const list = () => {
  return vehicles;
};

const show = id => {
  return vehicles.find(v => v._id == id);
};

const add = newVehicle => {
  newVehicle._id = vehicles[vehicles.length - 1]._id + 1;
  vehicles.push(newVehicle);
  return vehicles;
};

module.exports = {
  list,
  show,
  add
};
