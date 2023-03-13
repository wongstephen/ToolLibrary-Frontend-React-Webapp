import React from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";
import { deleteTool, getUserToolsApi, updateTool } from "../../api/axiosApi";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
export const FeedItem = ({ feed, setFeedData }) => {
  const navigate = useNavigate();

  const { auth } = useAuth();
  const tool = feed;

  const handleLoanee = async () => {
    try {
      const res = await updateTool(tool._id, { loanee: "" }, auth.token);
      setFeedData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrash = async () => {
    try {
      await deleteTool(tool._id, auth.token);
      const res = await getUserToolsApi(auth.token);
      setFeedData(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex py-1.5 min-h-[53px] border-b-[1px] border-b-gray-700/50 last-of-type:border-none">
      <img
        src={
          tool?.avator
            ? require(`../../assets/avator/${tool.avator}.png`)
            : require(`../../assets/avator/empty.png`)
        }
        alt="tool"
        className="flex-1 w-2/12 rounded-full max-w-[4rem] hidden"
        placeholder="none"
      />
      <div className="flex flex-col justify-around flex-1">
        <h3 className="font-light tracking-wider text-white">{tool.name}</h3>
        <p className="text-xs tracking-wider text-gray-300 ">{tool.loanee}</p>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        {tool.loanee && (
          <button
            onClick={handleLoanee}
            className="hidden cursor-pointer sm:block"
            aria-label={`Remove borrow of ${tool.name}`}
          >
            <UserMinusIcon
              className="w-6 h-auto text-gray-300 "
              title="Remove Loanee"
            />
          </button>
        )}
        <button
          onClick={() => {
            navigate("/edit-item", { state: tool });
          }}
          className="cursor-pointer"
          aria-label={`Edit ${tool.name} details`}
        >
          <PencilSquareIcon
            title="Edit Tool"
            className="w-6 h-auto text-gray-300"
          />
        </button>
        <button
          onClick={handleTrash}
          className="hidden cursor-pointer sm:block"
          aria-label={`Delete ${tool.name} from inventory`}
        >
          <TrashIcon
            className="hidden w-6 h-auto text-gray-300 cursor-pointer sm:block"
            title="Delete Tool"
          />
        </button>
      </div>
    </li>
  );
};
