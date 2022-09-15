import React, { useEffect, useState, useContext } from "react";
import { LoginRegisterLink } from "./LoginRegisterLink";
import { AuthContext } from "../hooks/AuthContext";
import { LoginForm } from "./LoginForm";

import useDisabled from "../hooks/useDisabled";

export const Login = () => {
  const { setUser } = useContext(AuthContext);

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const [disabled, setDisabled] = useDisabled(true);

  const handleChange = (e) => {
    setLoginValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (loginValue.email.length > 0 && loginValue.password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [loginValue]);

  return (
    <div className="login">
      <h1 className="login__app-title" data-testid="title">
        Tool Loaner
      </h1>
      <div className="login_gradient">
        <div className="login__form_container">
          <h3 className="login__title">Login Now</h3>
          <p className="login__warning">
            Please enter a valid email and password.
          </p>
          <LoginForm
            handleChange={handleChange}
            disabledBtn={disabled}
            loginValue={loginValue}
          />
          <LoginRegisterLink />
          <p
            style={{ color: "white", textAlign: "center", cursor: "pointer" }}
            onClick={() => {
              setUser(true);
            }}
          >
            Guest
          </p>
        </div>
      </div>
    </div>
  );
};
