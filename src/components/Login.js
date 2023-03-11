import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { LoginRegisterLink } from "./presentational/LoginRegisterLink";
import useDisabled from "../hooks/useDisabled";
import { PageTemplate } from "./presentational/PageTemplate";
import { InputText } from "./presentational/InputText";

export const Login = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useDisabled(true);
  const [showErr, setShowErr] = useState(false);

  // stores values of input into userInput state
  const handleChange = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // disables login button if email/pw critera isn't met
  useEffect(() => {
    if (userInput.email.length > 0 && userInput.password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userInput]);

  // resets error when changes are made to input
  useEffect(() => {
    setShowErr(() => {
      return false;
    });
  }, [userInput.email, userInput.password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setDisabled(true);
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/signin`,
        userInput
      );
      if (res.status === 200) {
        await localStorage.setItem("token", res.data.token);
        navigate("/feed");
        return;
      }
    } catch (err) {
      console.log("Invalid email or password.");
      setShowErr(true);
      return;
    } finally {
      setDisabled(false);
    }
  };

  return (
    <PageTemplate>
      <h2
        className="mt-12 text-4xl font-medium text-center text-white"
        data-testid="title"
      >
        Login to Your Account
      </h2>
      <p className="mt-4 font-light text-center text-light-gray">
        Never misplace a borrowed tool again.
      </p>
      <form
        className="flex flex-col max-w-sm gap-4 mx-auto mt-10 jusify-center"
        onSubmit={handleLogin}
        data-testid="form"
      >
        <p
          className="mx-auto mt-4 text-sm text-center text-red-500"
          style={{ opacity: `${showErr ? 1 : 0}` }}
        >
          Please enter a valid email and password.
        </p>
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
        <button
          aria-label="login"
          disabled={disabled}
          name="loginBtn"
          type="submit"
          className={`py-3 font-bold text-white w-40 mx-auto rounded-md ${
            disabled
              ? "bg-med-gray disabled:"
              : "bg-blue-cement  hover:bg-blue-700 hover:shadow-lg"
          }`}
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <LoginRegisterLink />
    </PageTemplate>
  );
};
