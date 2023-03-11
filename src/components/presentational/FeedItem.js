import React from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";
import { updateTool } from "../../api/axiosApi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const FeedItem = (props) => {
  const navigate = useNavigate();
  const tool = props.feed;

  const handleLoanee = async () => {
    const res = await updateTool(tool._id, { loanee: "" });
    props.setFeedData(res);
  };

  const handleTrash = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/tools/${tool._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/tools`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      props.setFeedData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex py-1.5 mx-6 border-b-[1px] border-b-gray-700/50 last-of-type:border-none">
      {/* Temp removed images features */}
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
        <p className="text-xs tracking-wider text-gray-500 ">{tool.loanee}</p>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        {tool.loanee && (
          <UserMinusIcon
            className="hidden w-6 h-auto text-gray-500 cursor-pointer sm:block"
            onClick={handleLoanee}
            title="Remove Loanee"
          />
        )}
        <PencilSquareIcon
          title="Edit Tool"
          className="w-6 h-auto text-gray-500 cursor-pointer"
          onClick={() => {
            navigate("/edit-item", { state: tool });
          }}
        />
        <TrashIcon
          className="hidden w-6 h-auto text-gray-500 cursor-pointerm sm:block"
          title="Delete Tool"
          onClick={handleTrash}
        />
      </div>
    </li>
  );
};
