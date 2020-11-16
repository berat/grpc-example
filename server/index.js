const grpc = require("grpc");
const UsersInterface = require("./usersInterface")();
const UsersService = require("./usersService");
const protoLoader = require("@grpc/proto-loader");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect(
  "mongodb+srv://root:root@cluster0-qwfpm.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  function (err) {
    return console.log(err ? err : "Mongo connected.");
  }
);

const PROTO_FILE = `${__dirname}/../users.proto`;

const packageDefinition = protoLoader.loadSync(PROTO_FILE);
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)
  .usersProto;
const client = new protoDescriptor.UsersService(
  "localhost:8080",
  grpc.credentials.createInsecure()
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
  client.findById({}, function (err, result) {
    if (err) {
      console.log(error);
      res.send({ err });
    }
    res.send(result);
  });
})

app.get("/getUser", function (req, res) {
  client.findById({}, function (err, result) {
    if (err) {
      console.log(error);
      res.send({ err });
    }
    res.send(result);
  });
});

const booksServer = getServer();
booksServer.bind(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure());
booksServer.start();
// console.log(`Server running on port ${PORT}`);
app.listen(3000, function () {
  console.log("Server listing on port 3000");
});
