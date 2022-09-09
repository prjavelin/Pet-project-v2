const express = require("express");
const router = express.Router();
const todosController = require("../controllers/chose");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", todosController.getIndex);
router.post("/createDG", todosController.createDG);

module.exports = router;
