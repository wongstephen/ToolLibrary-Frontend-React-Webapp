import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/axiosApi";

import { PageTemplate } from "./PageTemplate";

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
          className="w-full px-6 py-3 mt-0 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 hover:shadow-lg"
          onClick={goHome}
        >
          Log In
        </button>
      </div>

      <div className="h-[1px] w-auto bg-gray-300 my-10" />

      <h1 className="mb-5 text-center">Register a new account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formVal.email}
          placeholder="Email"
          aria-label="email"
          name="email"
          onChange={handleChange}
          // pattern=".+@globex\.com"
          size="30"
          required
          className="block w-full px-3 py-3 m-0 text-base font-normal text-gray-700 ease-in-out border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:outline-none focus:border-gray-300 "
        />

        <input
          type="password"
          value={formVal.password}
          placeholder="Password"
          aria-label="password"
          name="password"
          onChange={handleChange}
          required
          className="block w-full px-3 py-3 mt-5 text-base font-normal text-gray-700 ease-in-out border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:outline-none focus:border-gray-300"
        />
        <div className="text-center">
          <button
            name="register"
            aria-label="register"
            disabled={disabledBtn}
            type="submit"
            className={`px-6 py-3 font-bold text-white rounded-md w-full mt-5 transition-all ease-in-out ${
              disabledBtn
                ? "bg-green-300 disabled:"
                : "bg-green-500 hover:bg-green-700 hover:shadow-lg"
            }`}
          >
            Register
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};
