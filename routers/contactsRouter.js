const express = require("express");
const { list, show, add } = require("../controllers/contactsController");
const router = express.Router();

router.get("/contacts", (req, res) => {
  res.json(list());
});

router.get("/contacts/:id", (req, res) => {
  res.json(show(req.params.id));
});

router.post("/contacts", (req, res) => {
  res.json(add(req.body));
});

module.exports = router;
