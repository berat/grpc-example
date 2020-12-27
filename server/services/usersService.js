const User = require("../models/User");
const config = require("../config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function allUser(call, callback) {
  console.log("deneme")
  User.find().then(function (user) {
    if (!user) {
      return callback(null, { status: false, message: "boyle mail yok" });
    } else {
      return callback(null, { user });
    }
  });
}



function login({ request: { email, password } }, callback) {
  console.log("deneme")
  User.findOne({ email: email }).then(function (user) {
    if (!user) {
      return callback(null, { status: false, message: "boyle mail yok" });
    } else {
      if (
        user.password ===
        crypto
          .createHmac("sha256", config.jwtSecret)
          .update(password)
          .digest("hex")
      ) {
        const token = jwt.sign({ userid: user._id }, config.jwtSecret);
        return callback(null, { status: true, token: token });
      } else {
        return callback(null, { status: false, message: "hatali sifre" });
      }
    }
  });
}

module.exports = {
  allUser,
  login,
};
