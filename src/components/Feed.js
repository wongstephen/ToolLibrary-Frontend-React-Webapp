import React from "react";
import { AddItemBtn } from "./AddItemBtn";
import { FeedItem } from "./FeedItem";

export const Feed = () => {
  return (
    <main className="feed__container">
      <h1 className="feed__title">Tool Library</h1>
      <h2 className="feed__title-section">Checked Out</h2>
      <ul className="feed__layout">
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </ul>
      <div className="feed__container-addBtn">
        <AddItemBtn />
      </div>
    </main>
  );
};
