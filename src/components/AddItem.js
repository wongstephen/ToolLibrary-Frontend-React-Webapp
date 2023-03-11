import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageTemplate } from "./presentational/PageTemplate";
import { ChooseAvator } from "./presentational/ChooseAvator";
import { XCircleIcon } from "@heroicons/react/24/outline";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const AddItem = () => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    // photo: "https://loremflickr.com/200/200",
    loanee: "",
    avator: "empty",
  };

  const [data, setData] = useState(initialState);
  const [submitErr, setSubmitErr] = useState(false);
  useEffect(() => {
    setSubmitErr(() => {
      return false;
    });
  }, [data]);
  // avator for items

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const addTool = async (event) => {
    event.preventDefault();
    if (!data.name) {
      setSubmitErr(() => {
        return true;
      });
      return;
    }
    try {
      const token = await localStorage.getItem("token");
      const res = await axios.post(`${serverUrl}/tools/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setData(initialState);
      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  const inputStyle =
    "w-full p-3 text-sm font-light transition-all ease-in-out bg-gray-800 text-light-gray focus:text-white";

  return (
    <PageTemplate>
      <h2 className="mx-4 mt-8 text-4xl font-light tracking-wider text-left text-white">
        Add Item
      </h2>
      <p className="mx-4 mt-2 text-sm tracking-wider text-left font-extralight text-light-gray ">
        To begin tracking a new item in your inventory, complete the form below
        and add it to your list.
      </p>
      <form onSubmit={addTool} className="flex flex-col gap-4 mt-4">
        <label className="sr-only" htmlFor="name">
          Tool Name
        </label>
        <p
          className={`mx-auto text-xs text-center text-red-500 ${
            !submitErr ? "opacity-0" : "opacity-100"
          }`}
        >
          A tool name is required!
        </p>

        <input
          name="name"
          className={inputStyle}
          onChange={handleChange}
          value={data.name}
          placeholder="Tool Name"
        />
        <label className="sr-only" htmlFor="loanee">
          Borrower
        </label>
        <input
          name="loanee"
          onChange={handleChange}
          value={data.loanee}
          className={inputStyle}
          placeholder="Borrower"
        />
        <ChooseAvator setData={setData} />

        <div className="justify-center mx-auto mt-4">
          <button
            type="submit"
            className="w-40 py-3 font-bold text-white rounded-md bg-blue-cement hover:bg-blue-cement/80 active:bg-blue-900"
            onClick={addTool}
          >
            Submit
          </button>
          <button
            type="button"
            className="font-bold text-white "
            onClick={() => {
              navigate("/feed");
            }}
          >
            <XCircleIcon className="absolute w-12 h-12 text-white right-4 top-4 hover:text-light-gray active:text-med-gray" />
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};
