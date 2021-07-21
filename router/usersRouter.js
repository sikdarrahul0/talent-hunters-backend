//external imports
const express = require("express");

//internal imports
const { signup, login } = require("../controller/usersController");

const router = express.Router();

// User sign up
router.post("/signup", signup);
// User log in
router.post("/login", login);

module.exports = router;
