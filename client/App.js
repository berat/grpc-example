import React from 'react';

import Header from './component/header';
import Content from './Routers/content.router';
import Sidebar from './component/sidebar';
import Footer from './component/footer/';


import {UsersServiceClient} from './users_grpc_web_pb';
import { User, Empty } from './users_pb.js'

var client = new UsersServiceClient('localhost:9090', null);
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([
  client,
]);
const App = () => {

  // const request = new User();
  // request.setId(4)
  // request.setEmail('deneme@deneme.com');
  // request.setPassword('deneme');

  var metadata =  {};
  
  console.log(client)


  const request= new Empty();


  client.allUser(request, metadata, (err, response) => {
    if (response == null) {
      console.log(err)
    }else {
      console.log(response)
    }
  });
  // client.login(request, metadata, (err, response) => {
  //   if (response == null) {
  //     console.log(err)
  //   }else {
  //     console.log(response)
  //   }
  // });

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Content />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
