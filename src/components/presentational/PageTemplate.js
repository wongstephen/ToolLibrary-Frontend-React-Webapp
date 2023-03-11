import React from "react";
import { AppTitle } from "./AppTitle";

export const PageTemplate = ({ children }) => {
  return (
    <div className="pb-32 mx-auto">
      <AppTitle />
      {children}
    </div>
  );
};
