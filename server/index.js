const grpc = require("grpc");
const UsersInterface = require("./usersInterface")();
const UsersService = require("./services/usersService");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
const AuthRouter = require("./routes/auth.routes.js");

mongoose.connect(
  "mongodb+srv://root:root@cluster0-qwfpm.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  function (err) {
    return console.log(err ? err : "Mongo connected.");
  }
);


const PORT = process.env.PORT || "8080";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getServer = function () {
  const server = new grpc.Server();
  server.addService(UsersInterface, UsersService);
  return server;
};

app.get("/", function(req, res){
    res.send({msg: "Let's play"});
})

app.use(AuthRouter.routePrefix, AuthRouter.route())

const booksServer = getServer();
booksServer.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
booksServer.start();
// console.log(`Server running on port ${PORT}`);
app.listen(3000, function () {
  console.log("Server listing on port " + PORT);
});
