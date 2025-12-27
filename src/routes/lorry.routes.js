const express = require("express");
const router = express.Router();

const {
    getAllLorries, getLorryById, getLorryStatusHistory
} = require("../controllers/lorry.controller");

router.get("/lorries", getAllLorries);
router.get("/:id", getLorryById);
router.get("/:id/history", getLorryStatusHistory);

module.exports = router;