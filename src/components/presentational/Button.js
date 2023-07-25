import React from "react";
import { useDarkmode } from "../../reducers/Darkmode";

const Button = ({
  children,
  handleClick,
  cname,
  isDisabled = false,
  idName,
}) => {
  const { state } = useDarkmode();
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-all ${
        state.isDark
          ? "bg-theme-dark-system-gray hover:text-theme-yellow border-0"
          : "bg-white hover:bg-theme-yellow hover:text-white"
      }  rounded-md ${cname}`}
      onClick={handleClick}
      disabled={isDisabled}
      id={idName}
    >
      {children}
    </button>
  );
};

export default Button;
