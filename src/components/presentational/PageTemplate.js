import React from "react";
import { AppTitle } from "./AppTitle";

export const PageTemplate = ({ children }) => {
  return (
    <div>
      <AppTitle />
      {children}
    </div>
  );
};
