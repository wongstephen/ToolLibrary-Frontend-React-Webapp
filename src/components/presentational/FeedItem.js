import React from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";
import { toolDeleteAxios, toolUpdateAxios } from "../../api/axiosApi";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
export const FeedItem = ({ feed, setFeedData }) => {
  const navigate = useNavigate();

  const { user, updateUserData } = useAuth();
  const tool = feed;

  const handleLoanee = async () => {
    try {
      await toolUpdateAxios(tool._id, { loanee: "" }, user.token);
      updateUserData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleTrash = async () => {
    try {
      await toolDeleteAxios(tool._id, user.token);
      updateUserData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex items-center px-4 rounded-lg min-h-[84px] border-2 hover:border-theme-green bg-white shadow-sm">
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
        <h3 className="font-light tracking-wider text-black">{tool.name}</h3>
        <p className="text-xs tracking-wider text-gray-800 ">{tool.loanee}</p>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        {tool.loanee && (
          <button
            onClick={handleLoanee}
            className="hidden cursor-pointer text-theme-yellow sm:block hover:text-theme-yellow/90 active:text-theme-yellow/50"
            aria-label={`Remove borrow of ${tool.name}`}
          >
            <UserMinusIcon className="w-6 h-auto " title="Remove Loanee" />
          </button>
        )}
        <button
          onClick={() => {
            navigate(`/itemedit/${tool.id}`, { state: tool });
          }}
          className="cursor-pointer text-theme-green hover:text-theme-green/90 active:text-theme-green/50"
          aria-label={`Edit ${tool.name} details`}
        >
          <PencilSquareIcon title="Edit Tool" className="w-6 h-auto" />
        </button>
        <button
          onClick={handleTrash}
          className="hidden cursor-pointer text-theme-red hover:text-theme-red/90 sm:block active:text-theme-red/50"
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
