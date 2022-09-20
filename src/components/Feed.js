import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../hooks/AuthContext";

import { AddItemBtn } from "./AddItemBtn";
import { FeedItem } from "./FeedItem";
import { getUserToolsApi } from "../api/axiosApi";

export const Feed = ({ token }) => {
  const navigate = useNavigate();
  const { hasUser, setUser } = useContext(AuthContext);
  const [feedData, setfeedData] = useState([]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "");
    navigate("signout");
    setUser(null);
  };
  useEffect(() => {
    getUserToolsApi(setfeedData, token);
  }, []);

  return (
    <main className="feed__container">
      <h1 className="login__app-title">Tool Library</h1>
      {/* menu */}
      <div>
        <ul>
          <li>
            <button>Inventory</button>
          </li>
          <li>
            <button>Add</button>
          </li>
          <li>
            <button>Settings</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
      {/* checkout feed */}
      <ul className="feed__layout">
        <li>
          <h2
            className="feed__title-section"
            onClick={() => console.log(feedData)}
          >
            Checked Out
          </h2>
        </li>
        {feedData.length > 0 &&
          feedData
            .filter((tool) => {
              return tool.loanee;
            })
            .map((tool) => <FeedItem key={tool.id} feed={tool} />)}
      </ul>
      <div className="feed__container-addBtn">
        <AddItemBtn />
      </div>
    </main>
  );
};
