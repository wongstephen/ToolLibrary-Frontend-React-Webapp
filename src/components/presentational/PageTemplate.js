import React from "react";
import { AppTitle } from "./AppTitle";
import { Nav } from "./Nav";

export const PageTemplate = ({ children }) => {
  return (
    <div className="relative">
      <AppTitle />
      {children}
    </div>
  );
};
