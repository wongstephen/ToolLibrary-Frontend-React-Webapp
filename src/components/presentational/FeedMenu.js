import React from "react";
import { useNavigate } from "react-router-dom";

import {
  HomeIcon,
  ListBulletIcon,
  PlusIcon,
  ArrowLeftOnRectangleIcon,
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
          <button>
            <ListBulletIcon
              onClick={() => {
                navigate("/inventory");
              }}
              className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all "
            />
            <span className="text-xs">Inventory</span>
          </button>
        );
      default:
        return (
          <button>
            <HomeIcon
              onClick={() => {
                navigate("/feed");
              }}
              className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all"
            />
            <span className="text-xs">Home</span>
          </button>
        );
    }
  };

  return (
    <div className="flex justify-center my-5 text-center ">
      <ul className="flex justify-around p-2.5 m-0 w-full bg-lime-200 rounded-lg shadow-md gap-x-12">
        <li>
          {menuBtn1(leftBtn)}
          {/* <button>
            <ListBulletIcon
              onClick={() => {
                navigate("/inventory");
              }}
              className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all"
            />
            Inventory
          </button> */}
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/addItem");
            }}
          >
            <PlusIcon className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all" />
            <span className="text-xs">Add Item</span>
          </button>
        </li>
        <li>
          <button onClick={handleLogout}>
            <ArrowLeftOnRectangleIcon className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all" />
            <span className="text-xs">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
