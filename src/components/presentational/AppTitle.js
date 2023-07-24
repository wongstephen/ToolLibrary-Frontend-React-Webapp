import React from "react";
import { useDarkmode } from "../../reducers/Darkmode";

export const AppTitle = () => {
  const { state } = useDarkmode();
  return (
    <div className={`max-w-5xl p-4 mx-auto sm:pt-14`}>
      <h1 className="text-3xl font-bold tracking-normal text-center text-theme-green font-archivo">
        BorrowNinja
      </h1>
    </div>
  );
};
