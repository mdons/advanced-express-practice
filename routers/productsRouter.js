const express = require("express");
const router = express.Router();
const { list, show, add } = require("../controllers/productsController");

router.get("/products", (req, res) => {
  res.json(list());
});

router.get("/products/:id", (req, res) => {
  res.json(show(req.params.id));
});

router.post("/products", (req, res) => {
  res.json(add(req.body));
});

module.exports = router;
