import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ListBulletIcon,
  PlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const Nav = ({ showFullList, showBorrowedList }) => {
  const [borrowed, setBorrowed] = useState(true);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  const navAdd = () => {
    navigate("/itemadd");
  };

  const handleList = () => {
    if (borrowed) {
      showBorrowedList();
      setBorrowed((prev) => !prev);
    } else {
      showFullList();
      setBorrowed((prev) => !prev);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900/70 backdrop-blur-sm">
      <ul className="grid items-center max-w-lg grid-cols-3 mx-auto">
        <StdNavBtn
          nav={borrowed ? "Borrowed" : "Show All"}
          onClick={handleList}
        >
          <ListBulletIcon className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-theme-yellow cursor-pointer   active:bg-theme-yellow/50  hover:bg-theme-yellow/90" />
        </StdNavBtn>
        <StdNavBtn nav="Add Item" onClick={navAdd}>
          <PlusIcon className="w-12 h-12 p-2 text-white transition-all rounded-full cursor-pointer bg-theme-yellow active:bg-theme-yellow/50 hover:bg-theme-yellow/90" />
        </StdNavBtn>
        <StdNavBtn nav="Logout" onClick={handleLogout}>
          <ArrowLeftOnRectangleIcon className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-theme-yellow cursor-pointer  active:bg-theme-yellow/50  hover:bg-theme-yellow/90" />
        </StdNavBtn>
      </ul>
    </div>
  );
};

function StdNavBtn({ children, nav, onClick }) {
  return (
    <li className="mx-auto">
      <button
        className={`flex flex-col items-center gap-1  ${
          nav === "Add Item" && "relative bottom-2"
        }`}
        onClick={onClick}
        aria-label={nav}
      >
        {children}
        <span className="text-xs font-medium text-center text-light-gray">
          {nav}
        </span>
      </button>
    </li>
  );
}
