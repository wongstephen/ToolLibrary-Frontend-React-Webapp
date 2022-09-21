import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

export const SignOut = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    setUser("");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);
  return (
    <div
      // className="flex justify-center w-screen my-10 text-lg font-medium"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h3>Sign Out Successful</h3>
    </div>
  );
};
/* 
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h3>Sign Out Successful</h3>
    </div>
  );
};

 */
