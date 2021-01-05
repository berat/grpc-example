// const grpc = require("grpc");
const UsersInterface = require("./interfaces/usersInterface")();
const UsersService = require("./services/usersService");
const ContentService = require("./services/contentService");

var PROTO_PATH = __dirname + '/proto/users.proto';

var assert = require('assert');
var async = require('async');
var _ = require('lodash');
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var echo = protoDescriptor.usersProto.UsersService.service;

function getServer() {
  let server = new grpc.Server();
  server.addService(UsersInterface, {
    allUser: UsersService.allUser,
    login: UsersService.login,
    register: UsersService.register,
    share: ContentService.share,
    remove: ContentService.remove,
    allPost: ContentService.allPost
  });
  return server;
}

if (require.main === module) {
  var echoServer = getServer();
  echoServer.bindAsync(
    'localhost:9090', grpc.ServerCredentials.createInsecure(), (err, port) => {
      assert.ifError(err);
      echoServer.start();
  });
}
