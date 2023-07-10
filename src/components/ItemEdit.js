import React, { useEffect, useState, useRef } from "react";
import { PageTemplate } from "./presentational/PageTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { toolUpdateAxios, toolDeleteAxios } from "../api/axiosApi";
import { ChooseAvator } from "./presentational/ChooseAvator";
import { XCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import useAuth from "../hooks/useAuth";
import ToolModel from "./models/ToolModel";

export const ItemEdit = () => {
  const { user, updateUserData } = useAuth();
  const { id: toolId } = useParams();
  const navigate = useNavigate();

  const [submitErr, setSubmitErr] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [avator, setAvator] = useState("empty");
  const [previewImage, setPreviewImage] = useState("");

  const activeTool = user.user.tool.filter((tool) => tool._id === toolId)[0];
  const toolNameInputRef = useRef(activeTool.name);
  const loaneeInputRef = useRef(activeTool.loanee);

  const currentToolObj = new ToolModel(
    activeTool.name,
    activeTool.loanee,
    activeTool.avator,
    activeTool.toolImage
  );

  useEffect(() => {
    toolNameInputRef.current.value = currentToolObj.getToolName();
    loaneeInputRef.current.value = currentToolObj.getToolLoanee();
    setAvator(() => currentToolObj.getToolAvator());
    setPreviewImage(() => currentToolObj.getToolImageUrl());
    // eslint-disable-next-line
  }, []);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile.size > 10000000) {
      alert("File size must be less than 10MB");
      event.target.value = null;
      return;
    }
    setSelectedImage(() => imageFile);
    setPreviewImage(URL.createObjectURL(imageFile));
  };

  const onEditSubmit = async (e) => {
    e.preventDefault();
    if (!toolNameInputRef.current.value) {
      setSubmitErr(() => {
        return true;
      });
      return;
    }
    try {
      currentToolObj.setToolName(toolNameInputRef.current.value);
      currentToolObj.setToolLoanee(loaneeInputRef.current.value);
      currentToolObj.setToolAvator(avator);
      currentToolObj.setToolImageFile(selectedImage);
      const res = await toolUpdateAxios(
        toolId,
        currentToolObj.getFormData(),
        user.token
      );
      if (res.status === 202) {
        updateUserData();
        navigate("/home");
      } else {
        throw new Error("Opps something went wrong. Try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelTool = async (e) => {
    e.preventDefault();
    try {
      await toolDeleteAxios(toolId, user.token);
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
          Edit Item{" "}
          <button type="button" className="" onClick={handleDelTool}>
            <TrashIcon className="w-6 h-6 text-light-gray right-16 top-4 hover:text-light-gray active:text-med-gray" />
          </button>
        </h2>
        <p className="mx-4 mt-2 text-sm tracking-wider text-left font-extralight text-light-gray ">
          Edit the item name or who you loaned your item to. Leave the borrower
          blank if it was returned.
        </p>
        <form onSubmit={onEditSubmit} className="flex flex-col gap-4 mt-4">
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
            ref={toolNameInputRef}
            placeholder={"Borrower"}
          />
          <label className="sr-only" htmlFor="name">
            Borrower Name
          </label>
          <input
            name="loanee"
            className={inputStyle}
            ref={loaneeInputRef}
            placeholder={"Loanee"}
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

          <div className="justify-center mx-auto my-6">
            <button
              type="submit"
              className="w-40 py-3 font-bold text-white rounded-md bg-blue-cement hover:bg-blue-cement/80 active:bg-blue-900"
            >
              Submit
            </button>
            <button
              type="button"
              className="font-bold text-white "
              onClick={() => {
                navigate("/home");
              }}
            >
              <XCircleIcon className="absolute w-12 h-12 right-4 top-4 hover:text-light-gray active:text-med-gray" />
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};
