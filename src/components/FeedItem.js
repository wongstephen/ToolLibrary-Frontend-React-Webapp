import React from "react";

export const FeedItem = (props) => {
  const tool = props.data;
  return (
    <li className="feed__card">
      <img src={tool.photo} alt="tool" className="feed__avator"></img>

      <div className="feed__content">
        <h3 className="feed__text feed__text-title">{tool.name}</h3>
        <p className="feed__text feed__text-description">{tool.loanee}</p>
      </div>
      <div>Edit</div>
    </li>
  );
};
