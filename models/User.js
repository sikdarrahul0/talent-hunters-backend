const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ["job seeker", "employer", "admin"],
    default: "job seeker",
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
