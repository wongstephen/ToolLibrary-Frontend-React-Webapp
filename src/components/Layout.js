import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen xl:py-10 bg-theme-green">
      <div className="max-w-5xl p-1 pb-32 m-auto bg-slate-50 xl:rounded-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
