import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkmode } from "../../reducers/Darkmode";
import Button from "./Button";

export const NavigationBar = () => {
  const { state, dispatch } = useDarkmode();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full py-1 ${
        state.isDark
          ? "bg-zinc-950 border-b-2 border-theme-red"
          : "bg-theme-red"
      } `}
    >
      <ul className="flex justify-between max-w-5xl p-2 mx-auto lg:px-0">
        <li>
          {/* <button
            className={`px-4 py-2 text-sm font-medium transition-all duration-500 ${
              state.isDark
                ? "bg-[#1C1C1EFF] hover:text-theme-yellow"
                : "bg-white hover:bg-theme-yellow hover:text-white"
            }  rounded-md`}
            onClick={() => navigate("/itemadd")}
          >
            New Item
          </button> */}
          <Button nav_to="/itemadd">New Item</Button>
        </li>
        <span className="flex gap-4">
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
        </span>
      </ul>
    </div>
  );
};
