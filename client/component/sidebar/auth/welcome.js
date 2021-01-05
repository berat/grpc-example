import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Empty } from "../../../users_pb.js";
import { Client } from "../../../config";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";

const Welcome = ({ deleteLogin, deleteDefaultComp }) => {
  const kim = useSelector((state) => state.authReducer.login);
  const username = useSelector((state) => state.authReducer.username);
  const dispatch = useDispatch();

  const findToken = async () => {
    const request = new Empty();
    const userToken = jwtDecode(kim);

    Client.allUser(request, {}, (err, response) => {
      if (response == null) {
        console.log(err);
      } else {
        const user = response.user.filter(
          (dataItem) => dataItem._id === userToken.userid
        );
        const userNickname = JSON.stringify(
          user.map((value) => {
            return value.nickName;
          })
        );
        dispatch({
          type: "CURRENTUSER",
          payload: userNickname.slice(2, -2),
        });
      }
    });
  };
  findToken();

  const cikisYap = (e) => {
    deleteLogin();
    Cookies.remove("login");
    Cookies.remove("defaultComp");
    window.location.reload();
    deleteDefaultComp(0);
  };
  return (
    <div className="card">
      <div className="card-header">Hoş Geldin</div>
      <div className="card-body">
        <p>
          {" "}
          Merhaba <b>{username}</b>, Hoşgeldin.
        </p>
        <Link to="/home" onClick={cikisYap}>
          Çıkış Yap
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
