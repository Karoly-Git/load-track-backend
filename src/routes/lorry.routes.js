const express = require("express");
const router = express.Router();

const { getAllLorries } = require("../controllers/lorry.controller");

router.get("/lorries", getAllLorries);

module.exports = router;