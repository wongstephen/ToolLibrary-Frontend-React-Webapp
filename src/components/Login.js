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
      <div className="login__image-container">
        <img
          src={require("../assets/login-hero.png")}
          className="login__image-hero"
          alt="hero"
        />
      </div>
      <div className="login__content-container">
        <div>
          <h1 className="login__app-title" data-testid="title">
            TOOL LOANER
          </h1>
          <h2 className="login__h2-instructions" data-testid="title">
            Login or Register below to get started
          </h2>
          <div className="login_gradient">
            <div className="login__form_container">
              <LoginForm
                handleChange={handleChange}
                disabledBtn={disabled}
                loginValue={loginValue}
              />
              <p
                style={{
                  color: "gray",
                  textAlign: "center",
                  fontSize: ".75rem",
                }}
              >
                <span
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setUser(true);
                  }}
                >
                  Guest
                </span>
              </p>
              <LoginRegisterLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
