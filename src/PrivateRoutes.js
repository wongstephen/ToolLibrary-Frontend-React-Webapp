import { Outlet, Navigate } from "react-router-dom";
import React from "react";

export const PrivateRoutes = () => {
  let auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/" />;
};
