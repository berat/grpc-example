const express = require("express");
const config = require("../config");
// import jwt from "jsonwebtoken";
// import crypto from "crypto";
const USERclient = require("../grpcConnect");

function route() {
  const router = new express.Router();

  router.route("/").get(function (req, res) {
    USERclient.allUser({}, function (err, result) {
      if (err) {
        console.log(error);
        res.send({ err });
      }
      res.send(result);
    });
  });

  // router.route('/giris-yap').post((req, res) => {

  //   const { email, password } = req.body;

  //   User.findOne({ email: email }).then((user) => {
  //     if (!user) {
  //       res.send({ status: false, message: 'boyle mail yok' })
  //     }
  //     else {
  //       if (user.password === crypto.createHmac('sha256', config.jwtSecret).update(password).digest('hex')) {
  //         const token = jwt.sign({ userid: user._id }, config.jwtSecret);
  //         res.send({ status: true, token: token })
  //       }
  //       else {
  //         res.send({ status: false, message: 'hatali sifre' })
  //       }
  //     }
  //     res.send("ok");
  //   })
  // })

  // router.route('/kontrol').post((req, res) => {
  //   const { username } = req.body;

  //   const find = async username => await User.findOne({ nickName: username })

  //   find(username)
  //     .then((user) => {
  //       if (user) res.json({ status: true, data: user })
  //       else res.json({ status: false })
  //     })
  //     .catch((err) => res.json({ status: false, error: err }))
  // })

  // router.route('/kayit-ol').post((req, res) => {
  //   const { username, email, password } = req.body;
  //   const passwordHashed = crypto.createHmac('sha256', config.jwtSecret).update(password).digest('hex');

  //   const newUser = new User({
  //     nickName: username,
  //     email: email,
  //     password: passwordHashed,
  //     date: new Date()
  //   });

  //   newUser.validate((err, asd) => {
  //     console.log("err", err);
  //     console.log("asd", asd);
  //   })

  //   const find = async (email) => await User.findOne({ email: email })
  //   find(email)
  //     .then(user => {
  //       if (user === null) {
  //         const findUsername = async (username) => await User.findOne({ nickName: username })
  //         findUsername(username)
  //           .then(user => {
  //             if (user === null) {
  //               newUser.save().then(
  //                 (data) => { res.send({ status: true, user: data }) }
  //               )
  //             }
  //             else {
  //               res.send({ status: false, msg: "Username already exists" })
  //             }
  //           })
  //       }
  //       else {
  //         res.send({ status: false, msg: "E-mai already exists" })
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })

  // })

  return router;
}

module.exports = {
  route,
  routePrefix: `/${config.version}/auth`,
};
