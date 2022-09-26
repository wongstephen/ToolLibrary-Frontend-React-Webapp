import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import { AppTitle } from "./presentational/AppTitle";

export const SignOut = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col flex-wrap justify-center w-full text-center item-center h-1/3">
      <AppTitle />
      <h3>Sign Out Successful</h3>
    </div>
  );
};
