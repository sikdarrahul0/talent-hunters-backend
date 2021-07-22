//external imports
const bcrypt = require("bcrypt");

//internal imports
const User = require("../models/User");

//do sign up for new user
const signup = async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user.length > 0) {
      throw new Error(
        "Already username exist. Please try with another username"
      );
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({
      message: "Signup was successful!",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// do login for user
const login = async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });
    if (user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        res.status(200).json(user[0]);
      } else {
        res.status(401).json({
          error: "Incorrect password!. Please try again",
        });
      }
    } else {
      res.status(401).json({
        error: "Incorrect username!. Please try again",
      });
    }
  } catch (err) {
    res.status(401).json({
      error: "Authetication failed!",
    });
  }
};

module.exports = { signup, login };
