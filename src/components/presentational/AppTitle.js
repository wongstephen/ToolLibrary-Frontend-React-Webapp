import React from "react";
import logo from "../../assets/logo/2023logo.svg";

export const AppTitle = () => {
  return (
    <div className={`max-w-5xl p-4 mx-auto sm:pt-14 flex justify-center gap-4`}>
      <img src={logo} alt="BorrowNinja Logo" className="w-8 h-8" />
      <h1 className="text-3xl font-bold tracking-normal text-center text-theme-green font-archivo">
        BorrowNinja
      </h1>
    </div>
  );
};
