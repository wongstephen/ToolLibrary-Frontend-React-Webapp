import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkmode } from "../../reducers/Darkmode";
import Button from "./Button";
import logo from "../../assets/logo/2023logo.svg";

export const NavigationBar = () => {
  const { state } = useDarkmode();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full  ${
        state.isDark
          ? "bg-zinc-950 border-b-2 border-theme-red/50"
          : "bg-theme-red"
      } `}
    >
      <div className="flex items-center justify-between p-4 mx-auto max-w-8xl">
        <div className={`flex justify-left items-center gap-4`}>
          <img src={logo} alt="BorrowNinja Logo" className="w-8 h-8" />
          <h1
            className={`hidden text-3xl font-bold tracking-normal text-center  font-archivo md:block ${
              state.isDark ? "text-theme-green" : "text-white"
            }`}
          >
            BorrowNinja
          </h1>
        </div>

        <ul className="flex items-center justify-between gap-4 lg:px-0">
          <li>
            <Button handleClick={() => navigate("/itemadd")} cname="">
              New Item
            </Button>
          </li>

          <li>
            <button
              className="text-sm text-white hover:underline"
              onClick={() => navigate("/usersettings")}
            >
              Settings
            </button>
          </li>
          <li>
            <button
              className="text-sm text-white hover:underline"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
