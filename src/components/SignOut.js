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
