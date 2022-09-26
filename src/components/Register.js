import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/axiosApi";

import { PageTemplate } from "./presentational/PageTemplate";
import { InputText } from "./presentational/InputText";

export const Register = () => {
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const [disabledBtn, setDisabledBtn] = useDisabled(true);

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

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(formVal);
    console.log(res);
    navigate("/");
  };

  return (
    <PageTemplate>
      <h3 className="m-2.5 text-base text-center">Already have an account?</h3>
      <div className="text-center">
        <button
          className="w-full max-w-sm px-6 py-3 mt-0 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 hover:shadow-lg"
          onClick={goHome}
        >
          Log In
        </button>
      </div>

      <div className="h-[1px] w-auto bg-gray-300 my-10" />

      <h1 className="mb-5 text-center">Register a new account</h1>
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
          className={`w-full px-6 py-3 mt-0 font-bold text-white bg-blue-500 rounded-md ${
            disabledBtn
              ? "bg-green-300 disabled:"
              : "bg-green-500 hover:bg-green-700 hover:shadow-lg"
          }`}
        >
          Register
        </button>
      </form>
    </PageTemplate>
  );
};
