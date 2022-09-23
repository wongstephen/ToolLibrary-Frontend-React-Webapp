import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";

import { Login } from "./Login";
import { Feed } from "./Feed";

import("./HomeScreen.css");

export const HomeScreen = () => {
  return <Login />;
};
