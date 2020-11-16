const mongoose = require("mongoose");
const User = require("./models/User");

function findById(call, callback) {
  User.findOne().then(function (user) {
    if (!user) {
      res.send({ status: false, message: "boyle mail yok" });
    } else {
      console.log(user)
      return callback(null, user);
    }
  });
}

module.exports = {
  findById,
};
