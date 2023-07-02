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

  const { user, updateUserData } = useAuth();
  const tool = feed;

  const handleLoanee = async () => {
    try {
      await updateTool(tool._id, { loanee: "" }, user.token);
      updateUserData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrash = async () => {
    try {
      await deleteTool(tool._id, user.token);
      await getUserToolsApi(user.token);
      updateUserData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex py-1.5 min-h-[53px] border-b-[1px] border-b-gray-700/50 last-of-type:border-none">
      {tool.toolImage ? (
        <div className="w-2/12 max-w-[3rem] max-h-[3rem]  mr-4 overflow-hidden rounded-md">
          <img
            src={tool.toolImage}
            alt="tool"
            className="object-cover h-[125%] w-[125%] left-[50%] top-[50%] "
            placeholder="none"
          />
        </div>
      ) : (
        <img
          src={
            tool?.avator
              ? require(`../../assets/avator/${tool.avator}.png`)
              : require(`../../assets/avator/empty.png`)
          }
          alt="tool"
          className="flex-1 w-2/12 rounded-full max-w-[3rem] mr-4 hidden sm:block"
          placeholder="none"
        />
      )}

      <div className="flex flex-col justify-around flex-1">
        <h3 className="font-light tracking-wider text-white">{tool.name}</h3>
        <p className="text-xs tracking-wider text-gray-300 ">{tool.loanee}</p>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        {tool.loanee && (
          <button
            onClick={handleLoanee}
            className="hidden text-gray-300 cursor-pointer sm:block hover:text-blue-cement active:text-blue-cement/50"
            aria-label={`Remove borrow of ${tool.name}`}
          >
            <UserMinusIcon className="w-6 h-auto " title="Remove Loanee" />
          </button>
        )}
        <button
          onClick={() => {
            navigate("/edit-item", { state: tool });
          }}
          className="text-gray-300 cursor-pointer hover:text-blue-cement active:text-blue-cement/50"
          aria-label={`Edit ${tool.name} details`}
        >
          <PencilSquareIcon title="Edit Tool" className="w-6 h-auto" />
        </button>
        <button
          onClick={handleTrash}
          className="hidden text-gray-300 cursor-pointer hover:text-blue-cement sm:block active:text-blue-cement/50"
          aria-label={`Delete ${tool.name} from inventory`}
        >
          <TrashIcon
            className="hidden w-6 h-auto cursor-pointer sm:block"
            title="Delete Tool"
          />
        </button>
      </div>
    </li>
  );
};
