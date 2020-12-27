/**
 * @fileoverview gRPC-Web generated client stub for usersProto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.usersProto = require('./users_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.usersProto.UsersServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.usersProto.UsersServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usersProto.Empty,
 *   !proto.usersProto.AllUser>}
 */
const methodDescriptor_UsersService_allUser = new grpc.web.MethodDescriptor(
  '/usersProto.UsersService/allUser',
  grpc.web.MethodType.UNARY,
  proto.usersProto.Empty,
  proto.usersProto.AllUser,
  /**
   * @param {!proto.usersProto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usersProto.AllUser.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usersProto.Empty,
 *   !proto.usersProto.AllUser>}
 */
const methodInfo_UsersService_allUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usersProto.AllUser,
  /**
   * @param {!proto.usersProto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usersProto.AllUser.deserializeBinary
);


/**
 * @param {!proto.usersProto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usersProto.AllUser)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usersProto.AllUser>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usersProto.UsersServiceClient.prototype.allUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usersProto.UsersService/allUser',
      request,
      metadata || {},
      methodDescriptor_UsersService_allUser,
      callback);
};


/**
 * @param {!proto.usersProto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usersProto.AllUser>}
 *     Promise that resolves to the response
 */
proto.usersProto.UsersServicePromiseClient.prototype.allUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usersProto.UsersService/allUser',
      request,
      metadata || {},
      methodDescriptor_UsersService_allUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.usersProto.User,
 *   !proto.usersProto.Token>}
 */
const methodDescriptor_UsersService_login = new grpc.web.MethodDescriptor(
  '/usersProto.UsersService/login',
  grpc.web.MethodType.UNARY,
  proto.usersProto.User,
  proto.usersProto.Token,
  /**
   * @param {!proto.usersProto.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usersProto.Token.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.usersProto.User,
 *   !proto.usersProto.Token>}
 */
const methodInfo_UsersService_login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.usersProto.Token,
  /**
   * @param {!proto.usersProto.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.usersProto.Token.deserializeBinary
);


/**
 * @param {!proto.usersProto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.usersProto.Token)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.usersProto.Token>|undefined}
 *     The XHR Node Readable Stream
 */
proto.usersProto.UsersServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/usersProto.UsersService/login',
      request,
      metadata || {},
      methodDescriptor_UsersService_login,
      callback);
};


/**
 * @param {!proto.usersProto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.usersProto.Token>}
 *     Promise that resolves to the response
 */
proto.usersProto.UsersServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/usersProto.UsersService/login',
      request,
      metadata || {},
      methodDescriptor_UsersService_login);
};


module.exports = proto.usersProto;

