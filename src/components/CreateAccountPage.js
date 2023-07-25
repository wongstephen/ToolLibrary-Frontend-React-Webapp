import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
import { useNavigate } from "react-router-dom";
import { userRegisterAxios } from "../api/axiosApi";

import { InputText } from "./presentational/InputText";
import { Alert } from "./presentational/Alert";

export const CreateAccountPage = () => {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [disabledBtn, setDisabledBtn] = useDisabled(true);
  const [dupUser, setDupUser] = useState(false);
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (formVal.email && formVal.password) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formVal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formVal.password !== formVal.confirmPassword) {
      setPasswordsNotMatch(true);
      return;
    }
    setDisabledBtn(true);
    const res = await userRegisterAxios(formVal);
    setDisabledBtn(false);

    if (res.request.status === 500) {
      setDupUser(true);
    }
    if (res.status === 201) {
      navigate("/accountcreated");
    }
  };

  return (
    <div>
      <div className="w-11/12 max-w-md py-10 mx-auto mt-12 bg-white border-gray-100 rounded-lg sm:border-2">
        <h2
          className="mx-2 mb-4 text-4xl font-medium text-center text-theme-red"
          data-testid="title"
        >
          Register a New Account
        </h2>
        {dupUser && <Alert>Email has already been taken.</Alert>}
        {passwordsNotMatch && (
          <Alert>
            Passwords do noth Match. Please enter your password again.
          </Alert>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap  max-w-sm gap-2.5 my-2 mx-auto w-full mt-10"
        >
          <InputText
            type="email"
            value={formVal.email}
            placeholder="Email"
            aria-label="email"
            name="email"
            onChange={handleChange}
            size="30"
            required
          />

          <InputText
            type="password"
            value={formVal.password}
            placeholder="Password"
            aria-label="password"
            name="password"
            onChange={handleChange}
            required
          />
          <InputText
            type="password"
            value={formVal.confirmPassword}
            placeholder="Confirm Password"
            aria-label="confirm password"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
          <button
            aria-label="register"
            disabled={disabledBtn}
            name="register"
            type="submit"
            className={`py-3 px-10 font-bold text-white rounded-md ${
              disabledBtn
                ? "bg-gray-200 disabled:"
                : "bg-theme-green  hover:bg-theme-green/90 active:bg-theme-green/70 hover:shadow-lg"
            }`}
          >
            Register
          </button>
          <button
            aria-label="cancel"
            name="cancel"
            type="button"
            className={`py-3 px-10 font-bold text-theme-green rounded-md border-2 border-theme-green  hover:bg-theme-green active:bg-theme-green/70 hover:shadow-lg`}
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </form>
        <p className="p-4 mx-auto text-xs font-light text-black max-w-prose">
          The purpose of collecting the email address is to facilitate user
          authentication for accessing the BorrowNinja. The email address will
          not be utilized for any form of communication or correspondence by the
          BorrowNinja Team. The password is stored in a secure manner by
          applying a cryptographic hashing algorithm with a unique salt value
          for each user.
        </p>
        <div className="h-[1px] w-10/12 mx-auto bg-gray-300 my-10" />

        <p className="m-2.5 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="ml-2 font-medium underline cursor-pointer text-blue-cement"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
