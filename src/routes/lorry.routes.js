const express = require("express");
const router = express.Router();

const { getAllLorries } = require("../controllers/lorry.controller");

router.get("/all", getAllLorries);

module.exports = router;