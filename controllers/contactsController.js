let contacts = require("../contacts");

const list = () => {
  return contacts;
};

const show = id => {
  return contacts.find(c => c._id == id);
};

const add = newContact => {
  newContact._id = contacts[contacts.length - 1]._id + 1;
  contacts.push(newContact);
  return contacts;
};

module.exports = {
  list,
  show,
  add
};
