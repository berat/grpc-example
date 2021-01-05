const messages = require("./users_pb.js");
const services = require("./users_grpc_pb.js");
const grpc = require("@grpc/grpc-js");

function main() {
  const client = new services.UsersServiceClient(
    "localhost:8080",
    grpc.credentials.createInsecure()
  );

  let emptyFile = new messages.Empty();

  let message = new messages.User();

  const request = new messages.User();
  request.setId(4);
  request.setEmail("deneme@deneme.com");
  request.setPassword("deneme");

  // client.allUser(emptyFile, {}, function(err, res){
  //   console.log(res)
  // });

  client.login(request, {}, function (err, response) {
    if (response == null) {
      console.log(err);
    } else {
      console.log(response.array);
    }
  });
}
main();


