import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ListBulletIcon,
  PlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const FeedMenu = ({ leftBtn, showFullList, showBorrowedList }) => {
  const [borrowed, setBorrowed] = useState(true);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  const navAdd = () => {
    navigate("/addItem");
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
    <ul className="fixed bottom-0 grid items-center w-full grid-cols-3 bg-zinc-900/80 backdrop-blur-sm">
      <StdNavBtn nav={borrowed ? "Borrowed" : "Show All"} onClick={handleList}>
        <ListBulletIcon className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-blue-cement cursor-pointer" />
      </StdNavBtn>
      <StdNavBtn nav="Add Item" onClick={navAdd}>
        <PlusIcon className="w-12 h-12 p-2 text-white transition-all rounded-full cursor-pointer bg-blue-cement" />
      </StdNavBtn>
      <StdNavBtn nav="Logout" onClick={handleLogout}>
        <ArrowLeftOnRectangleIcon className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-blue-cement cursor-pointer" />
      </StdNavBtn>
    </ul>
  );
};

function StdNavBtn({ children, nav, onClick }) {
  return (
    <li className="mx-auto">
      <button
        className={`flex flex-col items-center gap-1 ${
          nav === "Add Item" && "relative bottom-2"
        }`}
        onClick={onClick}
      >
        {children}
        <span className="text-xs font-light text-center text-light-gray">
          {nav}
        </span>
      </button>
    </li>
  );
}
