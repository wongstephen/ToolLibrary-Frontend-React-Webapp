import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageTemplate } from "./presentational/PageTemplate";
import { ChooseAvator } from "./presentational/ChooseAvator";
import { XCircleIcon } from "@heroicons/react/24/outline";
import useAuth from "../hooks/useAuth";
import { addTool } from "../api/axiosApi";

const FormData = require("form-data");

let formData = new FormData();

export const AddItem = () => {
  const navigate = useNavigate();
  const { user, updateUserData } = useAuth();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageStatus, setImageStatus] = useState(false);

  const initialState = {
    name: "",
    loanee: "",
    avator: "empty",
    userImage: "",
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

  // useEffect(() => {
  //   if (data.userImage) {
  //     setImagePreview(URL.createObjectURL(data.userImage));
  //   }
  //   console.log(data);
  // }, [data]);

  const handleUserImage = (event) => {
    const { name, files } = event.target;
    if (files[0].size > 10000000) {
      alert("File size must be less than 10MB");
      event.target.value = null;
      return;
    }
    setData((prevState) => {
      return { ...prevState, [name]: files[0] };
    });
  };

  const handleAdd = async (event) => {
    event.preventDefault();
    if (!data.name) {
      return setSubmitErr(() => {
        return true;
      });
    }
    try {
      formData.append("name", data.name);
      formData.append("loanee", data.loanee);
      formData.append("avator", data.avator);
      formData.append("userImage", data.userImage);
      // for (let value of formData.entries()) {
      //   console.log(value);
      // }
      const res = await addTool(formData, user.token);
      console.log(res);
      updateUserData();
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const inputStyle =
    "w-full p-3 text-sm font-light transition-all ease-in-out bg-gray-800 text-light-gray focus:text-white";

  return (
    <PageTemplate>
      <div className="max-w-xl mx-auto">
        <h2 className="mx-4 mt-8 text-4xl font-light tracking-wider text-left text-white">
          Add Item
        </h2>
        <p className="mx-4 mt-2 text-sm tracking-wider text-left font-extralight text-light-gray ">
          To begin tracking a new item in your inventory, complete the form
          below and add it to your list.
        </p>
        <form
          onSubmit={addTool}
          className="flex flex-col gap-4 mt-4"
          id="addToolForm"
        >
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

          {/* user image */}
          <div className="my-4 text-center">
            <input
              className="w-40 h-10 mx-auto text-xs font-thin rounded-md text-cente text-light-gray"
              type="file"
              name="userImage"
              id="userImage"
              onChange={handleUserImage}
              accept="image/png, image/jpeg, image/jpg, image/gif"
            />

            {/* image preview */}
            {imagePreview && (
              <img src={imagePreview} alt="" className="max-w-sm mx-auto" />
            )}
          </div>

          <div className="justify-center mx-auto my-6">
            <button
              type="submit"
              className="w-40 py-3 font-bold text-white rounded-md bg-blue-cement hover:bg-blue-cement/80 active:bg-blue-900"
              onClick={handleAdd}
            >
              Submit
            </button>
            <button
              type="button"
              className="font-bold text-white "
              onClick={() => {
                navigate("/home");
              }}
              aria-label="Cancel and go back to homepage"
            >
              <XCircleIcon className="absolute w-12 h-12 text-white right-4 top-4 hover:text-light-gray active:text-med-gray" />
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};
