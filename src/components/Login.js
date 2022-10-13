import React, { useEffect, useState, useContext } from "react";
import { LoginRegisterLink } from "./presentational/LoginRegisterLink";
import { AuthContext } from "../hooks/AuthContext";
import { LoginForm } from "./LoginForm";

import useDisabled from "../hooks/useDisabled";
import { AppTitle } from "./presentational/AppTitle";

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
    <div className="justify-center min-h-screen sm:flex">
      <div className="flex items-center justify-center flex-1 w-11/12 max-w-sm px-4 py-12 mx-auto my-10 rounded-2xl bg-lime-200 sm:max-w-l sm:rounded-none sm:m-0">
        <img
          src={require("../assets/login-hero.png")}
          className="w-8/12"
          alt="hero"
        />
      </div>
      <div className="items-center justify-center flex-[1.5] w-11/12 mx-auto sm:px-5 sm:flex sm:justify-start md:pl-20">
        <div>
          <AppTitle />
          <div>
            <LoginForm
              handleChange={handleChange}
              disabledBtn={disabled}
              setDisabledBtn={setDisabled}
              loginValue={loginValue}
            />
            <LoginRegisterLink />
          </div>
        </div>
      </div>
    </div>
  );
};
