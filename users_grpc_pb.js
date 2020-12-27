// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');

function serialize_usersProto_AllUser(arg) {
  if (!(arg instanceof users_pb.AllUser)) {
    throw new Error('Expected argument of type usersProto.AllUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usersProto_AllUser(buffer_arg) {
  return users_pb.AllUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usersProto_Empty(arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type usersProto.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usersProto_Empty(buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usersProto_Token(arg) {
  if (!(arg instanceof users_pb.Token)) {
    throw new Error('Expected argument of type usersProto.Token');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usersProto_Token(buffer_arg) {
  return users_pb.Token.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usersProto_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type usersProto.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usersProto_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


// service definition
//
var UsersServiceService = exports.UsersServiceService = {
  allUser: {
    path: '/usersProto.UsersService/allUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.Empty,
    responseType: users_pb.AllUser,
    requestSerialize: serialize_usersProto_Empty,
    requestDeserialize: deserialize_usersProto_Empty,
    responseSerialize: serialize_usersProto_AllUser,
    responseDeserialize: deserialize_usersProto_AllUser,
  },
  login: {
    path: '/usersProto.UsersService/login',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.Token,
    requestSerialize: serialize_usersProto_User,
    requestDeserialize: deserialize_usersProto_User,
    responseSerialize: serialize_usersProto_Token,
    responseDeserialize: deserialize_usersProto_Token,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
