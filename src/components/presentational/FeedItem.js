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
      const res = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/tools/${tool._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const res2 = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/tools`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      props.setFeedData(res2.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="flex gap-5 p-2.5 border-2 border-gray-100 rounded">
      {/* Temp removed images features */}
      <img
        src={
          tool?.avator
            ? require(`../../assets/avator/${tool.avator}.png`)
            : require(`../../assets/avator/empty.png`)
        }
        alt="tool"
        className="flex-1 w-2/12 rounded-full max-w-[4rem]"
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
          <UserMinusIcon
            className="w-6 h-auto cursor-pointer text-gray-500/50"
            onClick={handleLoanee}
            title="Remove Loanee"
          />
        )}
        <PencilSquareIcon
          title="Edit Tool"
          className="w-6 h-auto cursor-pointer text-gray-500/50"
          onClick={() => {
            navigate("/edit-item", { state: tool });
          }}
        />
        <TrashIcon
          className="w-6 h-auto cursor-pointer text-gray-500/50"
          title="Delete Tool"
          onClick={handleTrash}
        />
      </div>
    </li>
  );
};
