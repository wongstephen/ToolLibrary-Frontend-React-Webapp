import React from "react";
import { PencilSquareIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import { updateTool } from "../api/axiosApi";
import { useNavigate } from "react-router-dom";

export const FeedItem = (props) => {
  const navigate = useNavigate();
  const tool = props.feed;

  const handleLoanee = async () => {
    const res = await updateTool(tool._id, { loanee: "" });
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
        <PencilSquareIcon
          className="w-6 h-auto cursor-pointer text-gray-500/50"
          onClick={() => {
            navigate("/edit-tool", { state: tool });
          }}
        />
      </div>
    </li>
  );
};
