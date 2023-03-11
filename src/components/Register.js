import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
import { useNavigate } from "react-router-dom";
import { useCheckToken } from "../hooks/useCheckToken";
import { signUp } from "../api/axiosApi";

import { PageTemplate } from "./presentational/PageTemplate";
import { InputText } from "./presentational/InputText";
import { Alert } from "./presentational/Alert";

export const Register = () => {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [disabledBtn, setDisabledBtn] = useDisabled(true);
  const [dupUser, setDupUser] = useState(false);
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);

  const navigate = useNavigate();
  useCheckToken(); //Send user to feed if already logged in

  useEffect(() => {
    if (formVal.email && formVal.password) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [formVal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal((prevState) => ({ ...prevState, [name]: value }));
  };

  const goHome = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formVal.password !== formVal.confirmPassword) {
      setPasswordsNotMatch(true);
      return;
    }
    setDisabledBtn(true);
    const res = await signUp(formVal);
    setDisabledBtn(false);

    if (res.request.status === 500) {
      setDupUser(true);
    }
    if (res.status === 201) {
      navigate("/accountcreated");
    }
  };

  return (
    <PageTemplate>
      <h2
        className="mx-2 mt-12 mb-4 text-4xl font-medium text-center text-white"
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
        className="flex flex-wrap justify-center max-w-sm gap-2.5 my-2 mx-auto w-full"
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
          className={`py-3 font-bold text-white w-full rounded-md ${
            disabledBtn
              ? "bg-med-gray disabled:"
              : "bg-blue-cement  hover:bg-blue-700 hover:shadow-lg"
          }`}
        >
          Register
        </button>
      </form>
      <p className="p-4 mx-auto text-xs font-light text-white max-w-prose">
        The purpose of collecting the email address is to facilitate user
        authentication for accessing the Tool Library. The email address will
        not be utilized for any form of communication or correspondence by the
        Tool Library. The password is stored in a secure manner by applying a
        cryptographic hashing algorithm with a unique salt value for each user.
      </p>
      <div className="h-[1px] w-auto bg-gray-300 my-10" />

      <h3 className="m-2.5 text-base text-center text-white">
        Already have an account?
      </h3>
      <div className="text-center">
        <button
          className="w-40 py-3 mx-auto font-bold text-white rounded-md bg-blue-cement hover:bg-blue-700 hover:shadow-lg"
          onClick={goHome}
        >
          Log In
        </button>
      </div>
    </PageTemplate>
  );
};
