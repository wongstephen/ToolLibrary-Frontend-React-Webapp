import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserToolsApi } from "../api/axiosApi";
import {
  ListBulletIcon,
  PlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

export const FeedMenu = (setfeedData, token) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };

  return (
    <div className="flex justify-center my-5 text-center ">
      <ul className="flex justify-around p-2.5 m-0 w-full bg-lime-200 rounded-lg shadow-md gap-x-12">
        <li>
          <button>
            <ListBulletIcon
              onClick={() => {
                navigate("/inventory");
              }}
              className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all"
            />
            Inventory
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/addItem");
            }}
          >
            <PlusIcon className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all" />
            Add
          </button>
        </li>
        <li>
          <button onClick={handleLogout}>
            <ArrowLeftOnRectangleIcon className="p-2.5 text-black rounded-full w-10 h-10 mx-auto white hover:bg-lime-400 transition-all" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
