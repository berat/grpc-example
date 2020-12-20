const Schema = require('./users_pb.js');

const Deneme = new Schema.Users();
Deneme.setId(42)
Deneme.setEmail("deneme@deneme.com")
Deneme.setPassword("dewfwfew")
console.log(Deneme.findById())