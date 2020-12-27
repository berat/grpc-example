const messages = require("./users_pb.js");
const services = require("./users_grpc_pb.js");
const grpc = require("@grpc/grpc-js");

function main() {
  const client = new services.UsersServiceClient(
    "localhost:8080",
    grpc.credentials.createInsecure()
  );

  let emptyFile = new messages.Empty();

  client.allUser(emptyFile, {}, function(err, res){
    console.log(res, err)
  });
}

main();
