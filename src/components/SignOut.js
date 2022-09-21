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
    <div className="text-green-900 text-lg font-medium flex justify-center w-screen m-4">
      <h3>Sign Out Successful</h3>
    </div>
  );
};
