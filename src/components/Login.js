import React, { useEffect, useState, useContext } from "react";
import { LoginToRegister } from "./LoginToRegister";
import { AuthContext } from "./hooks/AuthContext";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const { setUser } = useContext(AuthContext);

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const [disabledBtn, setDisabledBtn] = useState(true);

  const handleChange = (e) => {
    setLoginValue((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    if (loginValue.email.length > 0 && loginValue.password.length > 0) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [loginValue]);

  return (
    <div className="login">
      <h1 className="login__app-title">
        Tool <br /> Loaner
      </h1>
      <div className="login_gradient">
        <div className="login__form_container">
          <h3 className="login__title">Login Now</h3>
          <p className="login__warning">
            Please enter a valid email and password.
          </p>
          <LoginForm handleChange={handleChange} disabledBtn={disabledBtn} />
          <LoginToRegister />
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
