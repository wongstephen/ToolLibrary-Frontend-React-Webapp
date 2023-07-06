import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageTemplate } from "./presentational/PageTemplate";
import { ChooseAvator } from "./presentational/ChooseAvator";
import { XCircleIcon } from "@heroicons/react/24/outline";
import useAuth from "../hooks/useAuth";
import { toolCreateAxios } from "../api/axiosApi";

const FormData = require("form-data");

export const ItemAdd = () => {
  const navigate = useNavigate();
  const { user, updateUserData } = useAuth();

  const initialState = {
    name: "",
    loanee: "",
    avator: "empty",
  };

  const [data, setData] = useState(initialState);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

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

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile.size > 1048576) {
      alert("File size must be less than 10MB");
      event.target.value = null;
      return;
    }
    setSelectedImage(imageFile);
    setPreviewImage(URL.createObjectURL(imageFile));
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    if (!data.name) {
      return setSubmitErr(() => {
        return true;
      });
    }
    try {
      formData.append("name", data.name);
      formData.append("loanee", data.loanee);
      formData.append("avator", data.avator);
      formData.append("userImage", selectedImage);
      const res = await toolCreateAxios(formData, user.token);
      if (res.status === 201) {
        updateUserData();
        setData(initialState);
        setData(null);
        setPreviewImage(null);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try again.");
    } finally {
      formData = null;
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
          onSubmit={toolCreateAxios}
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
              onChange={handleImageChange}
              accept="image/*"
            />

            {/* image preview */}
            {previewImage && (
              <div>
                <br></br>
                <img
                  src={previewImage}
                  alt=""
                  className="max-w-sm mx-auto w-"
                />
              </div>
            )}
          </div>

          <div className="justify-center mx-auto my-6">
            <button
              type="submit"
              className="w-40 py-3 font-bold text-white rounded-md bg-blue-cement hover:bg-blue-cement/80 active:bg-blue-900"
              onClick={handleCreate}
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
