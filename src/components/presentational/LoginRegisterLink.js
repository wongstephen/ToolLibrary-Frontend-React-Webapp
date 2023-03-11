import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginRegisterLink = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <p className="text-sm text-center text-light-gray">
      Don't have an account?
      <span
        onClick={handleClick}
        className="ml-4 font-medium cursor-pointer text-blue-cement"
      >
        Register
      </span>
    </p>
  );
};
