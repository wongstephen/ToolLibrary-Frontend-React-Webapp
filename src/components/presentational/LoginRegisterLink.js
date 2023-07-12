import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginRegisterLink = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <p className="mt-10 text-sm text-center text-gray-500">
      Need an Account?
      <span
        onClick={handleClick}
        className="ml-2 font-medium underline cursor-pointer text-blue-cement"
      >
        Sign Up
      </span>
    </p>
  );
};
