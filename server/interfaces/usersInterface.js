const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const PROTO_FILE = `${__dirname}/../proto/users.proto`;

const getInterface = () => {
  const packageDefinition = protoLoader.loadSync(PROTO_FILE, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  return protoDescriptor.usersProto.UsersService.service;
};

module.exports = getInterface;
