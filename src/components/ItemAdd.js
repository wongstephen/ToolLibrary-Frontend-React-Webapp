import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { toolCreateAxios } from "../api/axiosApi";

import { PageTemplate } from "./presentational/PageTemplate";
import { ChooseAvator } from "./presentational/ChooseAvator";
import ToolModel from "./models/ToolModel";

export const ItemAdd = () => {
  const navigate = useNavigate();

  const { user, updateUserData } = useAuth();

  const toolNameInputRef = useRef();
  const loaneeInputRef = useRef("");
  const toolNotesInputRef = useRef("");

  const [avator, setAvator] = useState("empty");
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [submitErr, setSubmitErr] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    console.log(imageFile.size);

    if (imageFile.size > 10000000) {
      alert("File size must be less than 10MB");
      event.target.value = null;
      return;
    }
    setSelectedImage(() => imageFile);
    setPreviewImage(URL.createObjectURL(imageFile));
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    setLoading(() => true);
    if (!toolNameInputRef.current.value) {
      return setSubmitErr(() => {
        return true;
      });
    }
    try {
      const newTool = new ToolModel(
        toolNameInputRef.current.value,
        loaneeInputRef.current.value,
        avator
      );
      newTool.setToolImageFile(selectedImage);
      newTool.setToolNotes(toolNotesInputRef.current.value);

      const res = await toolCreateAxios(newTool.getFormData(), user.token);
      if (res.status === 201) {
        updateUserData();
        toolNameInputRef.current.value = "";
        loaneeInputRef.current.value = "";
        setAvator(() => "empty");
        setPreviewImage(() => null);
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(() => false);
    }
  };

  const inputStyle =
    "w-full p-4 font-light text-black transition ease-in-out bg-transparent border-2 border-gray-200 rounded-md focus:outline-theme-yellow";

  return (
    <PageTemplate>
      <div className="relative max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-left text-theme-red">
          Add Item
        </h2>
        <p className="mt-2 text-sm tracking-wider text-left font-extralight text-dark-gray">
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
            className={`mx-auto text-sm font-bold text-center text-red-500 ${
              !submitErr ? "opacity-0" : "opacity-100"
            }`}
          >
            A tool name is required!
          </p>

          <input
            name="name"
            className={inputStyle}
            placeholder="Tool Name"
            ref={toolNameInputRef}
          />
          <label className="sr-only" htmlFor="loanee">
            Borrower
          </label>
          <input
            name="loanee"
            className={inputStyle}
            placeholder="Borrower"
            ref={loaneeInputRef}
          />

          <label className="sr-only" htmlFor="notes">
            Notes
          </label>
          <textarea
            rows={5}
            name="notes"
            className={inputStyle}
            placeholder="Notes"
            ref={toolNotesInputRef}
          />
          <ChooseAvator setAvator={setAvator} avator={avator} />

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
                  className="w-full max-w-sm mx-auto"
                />
              </div>
            )}
          </div>

          <div className="flex justify-center gap-2 mx-auto my-6">
            <button
              type="submit"
              className={`px-10 py-4 font-bold text-white rounded-md ${
                loading
                  ? "bg-gray-400"
                  : "bg-theme-green hover:bg-theme-green/80 active:bg-theme-green/90"
              }`}
              onClick={handleCreate}
              disabled={loading}
            >
              Submit
            </button>

            <button
              type="button"
              className="px-10 py-4 font-bold border-2 rounded-md text-theme-green border-theme-green hover:border-theme-green/80 active:border-theme-green/90"
              onClick={() => {
                navigate("/home");
              }}
              aria-label="Cancel and go back to homepage"
            >
              Cancel{" "}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};
