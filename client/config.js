import { UsersServiceClient } from "../users_grpc_web_pb";

var Client = new UsersServiceClient("localhost:9090", null);

export default {
  Client,
};
