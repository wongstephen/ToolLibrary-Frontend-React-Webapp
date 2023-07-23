import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppTitle } from "./presentational/AppTitle";
import { useAuth } from "../context/AuthContext";

export const LogoutPage = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  useEffect(() => {
    window.localStorage.clear();
    logoutUser();
    setTimeout(() => {
      navigate("/");
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-col justify-center w-full h-screen text-center item-center">
      <AppTitle />
      <div className="flex items-center justify-center h-full">
        <h3 className="font-semibold text-theme-red">Sign Out Successful</h3>
      </div>
    </div>
  );
};
