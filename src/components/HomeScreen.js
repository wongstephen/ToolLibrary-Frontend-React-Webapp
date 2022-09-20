import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";

import { Login } from "./Login";
import { Feed } from "./Feed";

import("./HomeScreen.css");

export const HomeScreen = () => {
  const { hasUser } = useContext(AuthContext);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const lcToken = localStorage.getItem("token");
    if (token) {
      setToken(lcToken);
    }
  }, [token]);

  return hasUser ? <Feed token={hasUser.token} /> : <Login />;
};
