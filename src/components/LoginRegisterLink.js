import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginRegisterLink = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <p className="text-xs text-center">
      Done have an account?{" "}
      <span onClick={handleClick} className="font-medium text-blue-500">
        Register
      </span>
    </p>
  );
};
