import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppTitle } from "./presentational/AppTitle";

export const SignOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col justify-center w-full h-screen text-center item-center">
      <AppTitle />
      <div className="flex items-center justify-center h-full">
        <h3>Sign Out Successful</h3>
      </div>
    </div>
  );
};
