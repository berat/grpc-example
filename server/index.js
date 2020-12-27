const grpc = require("grpc");
const UsersInterface = require("./interfaces/usersInterface")();
const UsersService = require("./services/usersService");
const mongoose = require("mongoose");

function getServer() {
  var server = new grpc.Server();
  server.addService(UsersInterface, {
    allUser: UsersService.allUser,
    login: UsersService.login,
  });
  return server;
}

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@cluster0-qwfpm.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true },
      function (err) {
        return console.log(err ? err : "Mongo connected.");
      }
    );

    // api = new API(db, grpc);
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  await connectDB().catch(console.dir);
  
  let server = new grpc.Server();
  server.addService(UsersInterface, {
    allUser: UsersService.allUser,
    login: UsersService.login,
  });
  // server.addService(UsersInterface, UsersService);
  let address = "localhost:8080";
  server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("Server running at " + address);
  });
}

main();
