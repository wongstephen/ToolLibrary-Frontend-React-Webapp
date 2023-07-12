import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginRegisterLink } from "./presentational/LoginRegisterLink";
import useDisabled from "../hooks/useDisabled";
import { PageTemplate } from "./presentational/PageTemplate";
import { InputText } from "./presentational/InputText";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();

  const { user, loginUser } = useAuth();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useDisabled(true);
  const [errMsg, setErrMsg] = useState("");
  const [showErr, setShowErr] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // disables login btn
      setDisabled(true);
      await loginUser(userInput);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Invalid Username or Password");
      }
      setShowErr(true);
      return;
    } finally {
      setDisabled(false);
    }
  };

  // If user is logged in, redirect to feed
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <PageTemplate>
      <div className="w-11/12 max-w-md py-10 mx-auto mt-12 border-gray-100 rounded-lg sm:border-2">
        <h2
          className="text-4xl font-medium text-center text-theme-red font-open-sans"
          data-testid="title"
        >
          Login to Your Account
        </h2>
        <p className="mt-4 font-light text-center text-theme-red">
          Never misplace a borrowed tool again.
        </p>
        <form
          className="flex flex-wrap max-w-sm gap-2.5 mx-auto mt-10 w-full"
          onSubmit={handleLogin}
          data-testid="form"
        >
          <p
            className="mx-auto mt-4 text-sm text-center text-red-500"
            style={{ opacity: `${showErr ? 1 : 0}` }}
          >
            {errMsg}
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
            className={`px-10 py-3 font-bold text-white rounded-md ${
              disabled
                ? "bg-gray-200 disabled:"
                : "bg-theme-green  hover:bg-theme-green/90 active:bg-theme-green/70 hover:shadow-lg"
            }`}
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            aria-label="cancel"
            name="cancel"
            type="button"
            className={`px-10 py-3 font-bold text-theme-green rounded-md border-2 border-theme-green  hover:bg-theme-green active:bg-theme-green/70 hover:shadow-lg
            `}
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </form>
        <LoginRegisterLink />
      </div>
    </PageTemplate>
  );
};
