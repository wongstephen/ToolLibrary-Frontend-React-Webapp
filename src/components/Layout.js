import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen sm:py-10 bg-theme-green">
      <div className="max-w-2xl p-4 pb-32 m-auto bg-slate-50 sm:rounded-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
