import React, { useEffect, useState, useContext } from "react";
import { LoginToRegister } from "./LoginToRegister";
import { AuthContext } from "./hooks/AuthContext";

export const Login = () => {
  const { hasUser, setUser } = useContext(AuthContext);
  useEffect(() => console.log(hasUser), [hasUser]);

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
      {/* <p>For the people who want to stay freinds with freinds</p> */}
      <div className="login_gradient">
        <div className="login__form_container">
          <h3 className="login__title">Login Now</h3>
          <p className="login__warning">
            Please enter a valid email and password.
          </p>
          <form className="login__form">
            <input
              placeholder="Email"
              className="login__input"
              type="text"
              name="email"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              className="login__input"
              name="password"
              type="password"
              onChange={handleChange}
            />
            <button
              type="submit"
              name="loginBtn"
              disabled={disabledBtn}
              className={`login__button ${
                disabledBtn ? "login__button-disabled" : "login__button-enabled"
              }`}
            >
              Login
            </button>
          </form>
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
