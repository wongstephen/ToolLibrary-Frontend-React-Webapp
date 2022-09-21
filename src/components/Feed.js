import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../hooks/AuthContext";

import { AddItemBtn } from "./AddItemBtn";
import { FeedItem } from "./FeedItem";
import { getUserToolsApi } from "../api/axiosApi";

import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const Feed = ({ token }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [feedData, setfeedData] = useState([]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("/signout");
  };
  useEffect(() => {
    getUserToolsApi(setfeedData, token);
  }, []);

  return (
    <main className="py-10 bg-gradient-to-b from-lime-200 to-lime-300">
      <h1 className="text-5xl font-medium tracking-tighter text-center uppercase">
        Tool Library
      </h1>
      {/* menu */}
      <div className="flex justify-center my-5 text-center ">
        <ul className="flex justify-around w-11/12 max-w-xl p-5 bg-white rounded-lg shadow-md gap-x-12">
          <li>
            <button>
              <InventoryIcon />
              <br />
              Inventory
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/addItem");
              }}
            >
              <AddIcon />
              <br />
              Add
            </button>
          </li>

          <li>
            <button onClick={handleLogout}>
              <LogoutIcon />
              <br />
              Logout
            </button>
          </li>
        </ul>
      </div>
      {/* checkout feed */}
      <ul className="flex flex-col gap-x-12 rounded-lg bg-white justify-between px-5 py-5 w-11/12 max-w-xl mx-auto gap-2.5 shadow-md">
        <li>
          <h2
            className="my-5 text-lg font-medium text-center"
            onClick={() => console.log(feedData)}
          >
            Currently Loaned Out
          </h2>
        </li>
        {feedData.length > 0 &&
          feedData
            .filter((tool) => {
              return tool.loanee;
            })
            .map((tool) => <FeedItem key={tool.id} feed={tool} />)}
      </ul>
    </main>
  );
};
