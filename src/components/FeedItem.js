import React from "react";

export const FeedItem = (props) => {
  const tool = props.feed;
  return (
    <li className="feed__card">

      <div className="feed__card__input-container">
        <input type="checkbox" className="feed__card__input-checkin" />
      </div>

      <img src={tool.photo} alt="tool" className="feed__avator-image" placeholder="none" />

      <div className="feed__content">
        <h3 className="feed__text feed__text-title">{tool.name}</h3>
        <p className="feed__text feed__text-description">{tool.loanee}</p>
      </div>
      <div>Edit</div>
      
    </li>
  );
};
