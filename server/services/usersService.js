const User = require("../models/User");
const config = require("../config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function allUser(call, callback) {
  User.find().then(function (user) {
    if (!user) {
      return callback(null, { status: false, message: "boyle mail yok" });
    } else {
      return callback(null, { user });
    }
  });
}

function login({ request: { email, password } }, callback) {
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

function register({ request: { email, username, password } }, callback) {
  const passwordHashed = crypto
    .createHmac("sha256", config.jwtSecret)
    .update(password)
    .digest("hex");
  const newUser = new User({
    nickName: username,
    email: email,
    password: passwordHashed,
    date: new Date(),
  });

  newUser.validate((err, asd) => {
    console.log("err", err);
    console.log("asd", asd);
  });
  const find = async (email) => await User.findOne({ email: email });
  find(email)
    .then((user) => {
      if (user === null) {
        const findUsername = async (username) =>
          await User.findOne({ nickName: username });
        findUsername(username).then((user) => {
          if (user === null) {
            newUser.save().then((data) => {
              callback(null, { status: true, user: data });
            });
          } else {
            callback(null, { status: false, msg: "Username already exists" });
          }
        });
      } else {
        callback(null, { status: false, msg: "E-mai already exists" });
        res.send({ status: false, msg: "E-mai already exists" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = {
  allUser,
  login,
  register,
};
