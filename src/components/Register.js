import React, { useEffect, useState } from "react";
import useDisabled from "../hooks/useDisabled";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const [formVal, setFormVal] = useState({ email: "", password: "" });
  const [disabled, setDisabled] = useDisabled(true);

  useEffect(() => {
    if (formVal.email && formVal.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
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
  const inputStyle =
    "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ransition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div className="m-auto w-11/12 max-w-xl mt-10">
      <h1 className="text-5xl font-medium text-center tracking-tighter uppercase">
        Tool Loaner{" "}
      </h1>
      <h3 className="text-base text-center mt-10">Already have an account?</h3>
      <div className="text-center">
        <button
          className="w-1/2 mx-auto inline-block px-5 py-5 mt-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={goHome}
        >
          Log In
        </button>
      </div>

      <div className="h-[1px] w-auto bg-gray-300 my-10" />

      <h1 className="text-center mb-5">Register a new account</h1>
      <form>
        <input
          type="email"
          value={formVal.email}
          placeholder="Email"
          aria-label="email"
          name="email"
          onChange={handleChange}
          pattern=".+@globex\.com"
          size="30"
          required
          className={`${inputStyle} mb-5`}
        />

        <input
          type="password"
          value={formVal.password}
          placeholder="Password"
          aria-label="password"
          name="password"
          onChange={handleChange}
          required
          className={inputStyle}
        />
        <div className="text-center">
          <button
            name="register"
            aria-label="register"
            disabled={disabled}
            type="submit"
            className={
              disabled
                ? "inline-block px-5 py-5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-60 mt-10 mx-auto w-1/2 hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg  active:bg-green-700 active:shadow-lg"
                : "mt-10 mx-auto w-1/2 inline-block px-5 py-5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out "
            }
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
