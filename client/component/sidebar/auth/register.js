import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { User } from "../../../users_pb.js";
import { Client } from "../../../config";

const Register = ({ setdefaultComp }) => {
  const nickName = useRef(),
    email = useRef(),
    pass = useRef();

  const save = (e) => {
    e.preventDefault();

    const request = new User();
    request.setEmail(email.current.value);
    request.setPassword(pass.current.value);
    request.setUsername(nickName.current.value);

    Client.register(request, {}, (err, response) => {
      if (response == null) {
        console.log(err);
      } else {
        if (response.status) {
          setdefaultComp(0);
        } else {
          alert("Error");
        }
      }
    });
  };

  return (
    <div className="card">
      <div className="card-header">Register</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <input
              type="text"
              ref={nickName}
              pattern="^[a-zA-Z0-9]+$"
              minLength="1"
              maxLength="16"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              ref={email}
              minLength="1"
              className="form-control"
              placeholder="Mail address"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              ref={pass}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            onClick={save}
            className="form-control btn btn-primary"
          >
            Register
          </button>
          <small
            id="emailHelp"
            className="text-center form-text text-muted mt-sm-2"
          >
            Have you account?
            <Link
              to="/home"
              onClick={() => {
                setdefaultComp(0);
              }}
            >
              {" "}
              Login
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
