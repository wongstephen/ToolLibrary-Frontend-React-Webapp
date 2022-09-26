import React, { useState } from "react";
import { PageTemplate } from "./presentational/PageTemplate";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTool } from "../api/axiosApi";

export const EditItem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tool = location.state;
  const [body, setBody] = useState({
    name: tool.name,
    photo: tool.photo,
    loanee: tool.loanee,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBody((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const editTool = async (e) => {
    e.preventDefault();
    try {
      await updateTool(tool._id, body);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageTemplate>
      <h2>Edit Item</h2>
      <form onSubmit={editTool}>
        <input
          name="name"
          className="block w-full px-3 py-3 m-0 my-5 text-base font-normal text-gray-700 ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding ransition focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          //   defaultValue={tool.name}
          value={body.name}
          onChange={handleChange}
        />

        <input
          className="block w-full px-3 py-3 m-0 my-5 text-base font-normal text-gray-700 ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding ransition focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name="photo"
          //   defaultValue={tool.photo}
          value={body.photo}
          onChange={handleChange}
        />

        <input
          name="loanee"
          className="block w-full px-3 py-3 m-0 my-5 text-base font-normal text-gray-700 ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding ransition focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Borrower"
          //   defaultValue={tool.loanee}
          value={body.loanee}
          onChange={handleChange}
        />
        <br />
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-6 py-3 font-bold text-white bg-blue-600 rounded-md"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-6 py-3 font-bold text-white bg-red-600 rounded-md"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};
