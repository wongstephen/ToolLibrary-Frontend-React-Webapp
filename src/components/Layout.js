import React from "react";
import { Outlet } from "react-router-dom";
import { useDarkmode } from "../reducers/Darkmode";
const Layout = () => {
  const { state } = useDarkmode();
  return (
    <div
      className={`min-h-screen py-20 xl:py-28 ${
        state.isDark ? "bg-[#000000FF]" : " bg-theme-green"
      }`}
    >
      <div
        className={`max-w-5xl p-1 pb-32 m-auto ${
          state.isDark
            ? "bg-stone-950 border-theme-green lg:border-2 text-white"
            : " bg-slate-50"
        } lg:rounded-xl`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
