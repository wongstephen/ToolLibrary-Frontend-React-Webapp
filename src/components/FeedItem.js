import React from "react";

export const FeedItem = () => {
  return (
    <li className="feed__card">
      <img
        src="https://picsum.photos/200"
        alt="tool"
        className="feed__avator"
      ></img>

      <div className="feed__content">
        <h3 className="feed__text feed__text-title">18GA Dewalt Nail Gun</h3>
        <p className="feed__text feed__text-description">David</p>
      </div>
      <div>Edit</div>
    </li>
  );
};
