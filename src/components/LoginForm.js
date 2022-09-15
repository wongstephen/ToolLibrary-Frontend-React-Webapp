import React, { useContext } from "react";
import axios from "axios";

import { AuthContext } from "../hooks/AuthContext";

export const LoginForm = ({ handleChange, disabledBtn, loginValue }) => {
  const { setUser } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/users/signin",
        loginValue
      );
      setUser(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="login__form">
      <input
        placeholder="Email"
        className="login__input"
        type="text"
        name="email"
        onChange={handleChange}
        onSubmit={handleLogin}
        pattern=".+@globex\.com"
        size="30"
        required
      />
      <input
        placeholder="Password"
        className="login__input"
        name="password"
        type="password"
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        name="loginBtn"
        disabled={disabledBtn}
        className={`login__button ${
          disabledBtn ? "login__button-disabled" : "login__button-enabled"
        }`}
        onClick={handleLogin}
      >
        Login
      </button>
    </form>
  );
};
