import React from "react";

export const LoginForm = ({ handleChange, disabledBtn }) => {
  return (
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
  );
};
