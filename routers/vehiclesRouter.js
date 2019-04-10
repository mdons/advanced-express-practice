const express = require("express");
const router = express.Router();
const { list, show, add } = require("../controllers/vehiclesController");

router.get("/vehicles", (req, res) => {
  res.json(list());
});

router.get("/vehicles/:id", (req, res) => {
  res.json(show(req.params.id));
});

router.post("/vehicles", (req, res) => {
  res.json(add(req.body));
});

module.exports = router;
