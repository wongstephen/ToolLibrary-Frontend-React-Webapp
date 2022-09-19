import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AuthContext } from "../hooks/AuthContext";

import { AddItemBtn } from "./AddItemBtn";
import { FeedItem } from "./FeedItem";

export const Feed = () => {
  const { hasUser } = useContext(AuthContext);
  const [feedData, setfeedData] = useState([]);

  useEffect(() => {
    const getUserTools = async () => {
      const res = await axios.get("http://localhost:8000/tools", {
        headers: {
          Authorization: `Bearer ${hasUser.token}`,
        },
      });
      setfeedData(res.data);
      console.log(res.data);
    };
    getUserTools();
  }, []);

  useEffect(() => console.log(feedData), [feedData]);

  return (
    <main className="feed__container">
      <h1 className="feed__title">Tool Library</h1>
      <h2 className="feed__title-section" onClick={() => console.log(feedData)}>
        Checked Out
      </h2>
      <ul className="feed__layout">
        {feedData.length > 0 &&
          feedData.map((tool) => <FeedItem key={tool.id} feed={tool} />)}
      </ul>
      <div className="feed__container-addBtn">
        <AddItemBtn />
      </div>
    </main>
  );
};
