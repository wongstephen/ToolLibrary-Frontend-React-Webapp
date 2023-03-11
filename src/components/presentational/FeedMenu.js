import React from "react";
import { useNavigate } from "react-router-dom";

import {
  HomeIcon,
  ListBulletIcon,
  PlusIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const FeedMenu = ({ leftBtn }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  const menuBtn1 = (leftBtn) => {
    switch (leftBtn) {
      case "inventory":
        return (
          <button className="flex flex-col items-center gap-1">
            <ListBulletIcon
              onClick={() => {
                navigate("/inventory");
              }}
              className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-blue-cement cursor-pointer"
            />
            <span className="text-xs font-light text-center text-light-gray">
              Inventory
            </span>
          </button>
        );
      default:
        return (
          <button className="flex flex-col items-center gap-1">
            <HomeIcon
              onClick={() => {
                navigate("/feed");
              }}
              className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-blue-cement cursor-pointer"
            />
            <span className="text-xs font-light text-center text-light-gray">
              Home
            </span>
          </button>
        );
    }
  };

  const navAdd = () => {
    navigate("/addItem");
  };

  return (
    <ul className="fixed bottom-0 flex items-center justify-around w-full h-14 bg-zinc-900/80 backdrop-blur-sm">
      <li>{menuBtn1(leftBtn)}</li>

      <StdNavBtn nav="Add Item" onClick={navAdd}>
        <PlusIcon className="w-12 h-12 p-2 text-white transition-all rounded-full cursor-pointer bg-blue-cement" />
      </StdNavBtn>
      <StdNavBtn nav="Profile" onClick={handleLogout}>
        <UserIcon className="p-2.5 text-white rounded-md w-8 h-8 transition-all bg-blue-cement cursor-pointer" />
      </StdNavBtn>
    </ul>
  );
};

function StdNavBtn({ children, nav, onClick }) {
  return (
    <li>
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
