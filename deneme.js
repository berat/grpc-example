const Schema = require('./users_pb.js');

const Deneme = new Schema.Users();
Deneme.setId(42)
Deneme.setEmail("deneme@deneme.com")
console.log(Deneme.getEmail(), "\n", Deneme.getId())