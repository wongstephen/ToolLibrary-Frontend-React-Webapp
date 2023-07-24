import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkmode } from "../../reducers/Darkmode";

const Button = ({ children, nav_to }) => {
  const navigate = useNavigate();
  const { state } = useDarkmode();
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-all duration-500 ${
        state.isDark
          ? "bg-theme-dark-system-gray hover:text-theme-yellow"
          : "bg-white hover:bg-theme-yellow hover:text-white"
      }  rounded-md`}
      onClick={() => navigate(nav_to)}
    >
      {children}
    </button>
  );
};

export default Button;
