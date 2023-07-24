import React from "react";
import { AppTitle } from "./AppTitle";

export const PageTemplate = ({ children }) => {
  return (
    <div className="relative">
      <AppTitle />
      {children}
    </div>
  );
};
