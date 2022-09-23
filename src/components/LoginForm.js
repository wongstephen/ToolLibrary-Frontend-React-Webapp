import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../hooks/AuthContext";
import { signInApi } from "../api/axiosApi";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ handleChange, disabledBtn, loginValue }) => {
  const { setUser } = useContext(AuthContext);
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

  const inputStyle =
    "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ransition ease-in-out m-0 focus:text-gray-700 transisiton-all focus:outline-none";

  return (
    <>
      <h2 className="mt-5 text-sm font-light text-center" data-testid="title">
        Login or Register below to get started
      </h2>

      <form className="flex flex-wrap justify-center max-w-sm gap-2.5 my-2 mx-auto">
        <input
          placeholder="Email"
          className={inputStyle}
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
          className={inputStyle}
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
          type="submit"
          name="loginBtn"
          disabled={disabledBtn}
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
