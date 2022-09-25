import React from "react";
import { PencilSquareIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import { updateLoanee } from "../api/axiosApi";
export const FeedItem = (props) => {
  const tool = props.feed;
  const handleLoanee = async () => {
    const res = await updateLoanee(tool._id);
    props.setFeedData(res);
  };
  return (
    <li className="flex gap-5 p-2.5 border-2 border-gray-100 rounded">
      <img
        src={tool.photo}
        alt="tool"
        className="feed__avator-image"
        placeholder="none"
      />
      <div className="flex flex-col justify-around flex-1">
        <h3 className="p-0 m-0 text-base font-semibold tracking-wider ">
          {tool.name}
        </h3>
        <p className="p-0 m-0 text-xs tracking-wider text-gray-500 ">
          {tool.loanee}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        {tool.loanee && (
          <MinusCircleIcon
            className="w-6 h-auto cursor-pointer text-gray-500/50"
            onClick={handleLoanee}
          />
        )}
        <PencilSquareIcon className="w-6 h-auto text-gray-500/50" />
      </div>
    </li>
  );
};
