import React, { useEffect, useState } from "react";

import { signInApi } from "../api/axiosApi";
import { useNavigate } from "react-router-dom";
import { InputText } from "./presentational/InputText";

export const LoginForm = ({ handleChange, disabledBtn, loginValue }) => {
  const [showErr, setShowErr] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signInApi(e, loginValue, setShowErr);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      navigate("/feed");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null || token === undefined || token === "" || !token) {
      return;
    } else if (token) {
      navigate("/feed");
    }
  }, []);

  return (
    <>
      <h2 className="mt-5 text-sm font-light text-center" data-testid="title">
        Login or Register below to get started
      </h2>

      <form
        className="flex flex-wrap justify-center max-w-sm gap-2.5 my-2 mx-auto"
        onSubmit={handleLogin}
      >
        <InputText
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
          size="30"
          required
        />
        <InputText
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          required
        />
        <p
          className="mx-auto mt-5 text-xs text-center text-red-700"
          style={{ display: `${showErr ? "block" : "none"}` }}
        >
          Please enter a valid email and password.
        </p>
        <button
          aria-label="login"
          disabled={disabledBtn}
          name="loginBtn"
          type="submit"
          className={`px-6 py-3 font-bold text-white rounded-md w-full ${
            disabledBtn
              ? "bg-blue-300 disabled:"
              : "bg-blue-500  hover:bg-blue-700 hover:shadow-lg"
          }`}
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </>
  );
};
