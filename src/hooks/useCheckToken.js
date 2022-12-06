import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckToken = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/feed");
    }
  }, []);
};
