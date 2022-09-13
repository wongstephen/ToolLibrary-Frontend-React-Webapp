import React, { useContext } from "react";

import { AuthContext } from "./hooks/AuthContext";

import { Login } from "./Login";
import { Feed } from "./Feed";

import("./HomeScreen.css");

export const HomeScreen = () => {
  const { hasUser } = useContext(AuthContext);
  console.log(hasUser);
  return hasUser ? <Feed /> : <Login />;
};
