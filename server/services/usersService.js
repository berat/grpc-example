const mongoose = require("mongoose");
const User = require("../models/User");

function allUser(call, callback) {
  User.find().then(function (user) {
    if (!user) {
      res.send({ status: false, message: "boyle mail yok" });
    } else {
      return callback(null, { user });
    }
  });
}

module.exports = {
  allUser,
};
