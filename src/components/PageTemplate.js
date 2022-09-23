import React from "react";
import { AppTitle } from "./AppTitle";

export const PageTemplate = ({ children }) => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="flex flex-col gap-x-12 rounded-lg bg-white justify-between px-5 py-5 w-11/12 max-w-xl mx-auto gap-2.5 shadow-md">
        <AppTitle />
        {children}
      </div>
    </div>
  );
};
