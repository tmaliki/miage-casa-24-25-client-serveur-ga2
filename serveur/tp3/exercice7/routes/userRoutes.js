const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// http://localhost:3000/api/users/add
router.post("/add", UserController.addUser);

module.exports = router;
