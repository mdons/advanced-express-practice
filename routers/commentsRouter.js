const express = require("express");
const router = express.Router();
const { list, show, add } = require("../controllers/commentsController");

router.get("/comments", (req, res) => {
  res.json(list());
});

router.get("/comments/:id", (req, res) => {
  res.json(show(req.params.id));
});

router.post("/comments", (req, res) => {
  res.json(add(req.body));
});

module.exports = router;
