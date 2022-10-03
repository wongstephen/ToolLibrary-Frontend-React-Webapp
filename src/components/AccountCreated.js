import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppTitle } from "./presentational/AppTitle";

export const AccountCreated = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }, []);
  return (
    <div className="flex flex-col flex-wrap justify-center w-full text-center item-center h-1/3">
      <AppTitle />
      <h3>
        Account sucessfully created. Automatically redirecting to login page.
      </h3>
    </div>
  );
};
