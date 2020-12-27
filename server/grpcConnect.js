const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const UsersService = require("./services/usersService");

const USER_PROTO_FILE = `${__dirname}/../users.proto`;

const USERpackageDefinition = protoLoader.loadSync(USER_PROTO_FILE, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const USERprotoDescriptor = grpc.loadPackageDefinition(USERpackageDefinition)
  .usersProto;
const USERclient = new USERprotoDescriptor.UsersService(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

module.exports = USERclient;
