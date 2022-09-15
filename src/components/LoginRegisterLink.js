import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginRegisterLink = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <p className="login__register">
      Done have an account?{" "}
      <span onClick={handleClick} className="login__register-span">
        Register
      </span>
    </p>
  );
};
