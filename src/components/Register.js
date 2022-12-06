import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
import { useNavigate } from "react-router-dom";
import { useCheckToken } from "../hooks/useCheckToken";
import { signUp } from "../api/axiosApi";

import { PageTemplate } from "./presentational/PageTemplate";
import { InputText } from "./presentational/InputText";
import { Alert } from "./presentational/Alert";

export const Register = () => {
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const [disabledBtn, setDisabledBtn] = useDisabled(true);
  const [dupUser, setDupUser] = useState(false);

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
      <p className="mt-5 text-sm font-light text-center">
        Register a new account
      </p>
      {dupUser && <Alert>Email has already been taken</Alert>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center max-w-sm gap-2.5 my-2 mx-auto"
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
        <button
          aria-label="register"
          disabled={disabledBtn}
          name="register"
          type="submit"
          className={`w-full px-6 py-3 mt-0 font-bold text-white bg-blue-500 rounded-sm ${
            disabledBtn
              ? "bg-gray-400 disabled:"
              : "bg-green-600 hover:bg-green-700 hover:shadow-lg"
          }`}
        >
          Register
        </button>
      </form>

      <div className="h-[1px] w-auto bg-gray-300 my-10" />

      <h3 className="m-2.5 text-base text-center">Already have an account?</h3>
      <div className="text-center">
        <button
          className="w-full max-w-sm px-6 py-3 mt-0 font-bold text-white bg-blue-600 rounded-sm hover:bg-blue-700 hover:shadow-lg"
          onClick={goHome}
        >
          Log In
        </button>
      </div>
    </PageTemplate>
  );
};
