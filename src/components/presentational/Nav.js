import React from "react";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  return (
    <div
      className="fixed top-0 left-0 z-10 w-full bg-theme-red"
      onClick={() => navigate("/itemadd")}
    >
      <ul className="flex justify-between max-w-5xl p-2 mx-auto lg:px-0">
        <button className="px-4 py-2 text-sm font-medium bg-white rounded-md hover:bg-theme-yellow">
          New Item
        </button>
        <button
          className="text-sm text-white hover:underline"
          onClick={handleLogout}
        >
          Logout
        </button>
      </ul>
    </div>
  );
};
