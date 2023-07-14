import React, { useEffect, useState, useRef } from "react";
import { PageTemplate } from "./presentational/PageTemplate";
import { useNavigate, useParams } from "react-router-dom";
import { toolUpdateAxios, toolDeleteAxios } from "../api/axiosApi";
import { ChooseAvator } from "./presentational/ChooseAvator";
import { TrashIcon } from "@heroicons/react/24/outline";
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
  const loaneeInputRef = useRef();
  const toolNotesInputRef = useRef();

  const currentToolObj = new ToolModel(
    activeTool.name,
    activeTool.loanee,
    activeTool.avator,
    activeTool.toolImage
  );

  useEffect(() => {
    activeTool.notes && currentToolObj.setToolNotes(activeTool.notes);
    toolNameInputRef.current.value = currentToolObj.getToolName();
    loaneeInputRef.current.value = currentToolObj.getToolLoanee();
    toolNotesInputRef.current.value = currentToolObj.getToolNotes();

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
      currentToolObj.setToolNotes(toolNotesInputRef.current.value);
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
    "w-full p-4 font-light text-black transition ease-in-out bg-transparent border-2 border-gray-200 rounded-md focus:outline-theme-yellow";

  return (
    <PageTemplate>
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-left text-theme-red">
          Edit Item
          <button type="button" className="ml-4" onClick={handleDelTool}>
            <TrashIcon className="w-6 h-6 text-theme-red right-16 top-4 hover:text-light-gray active:text-med-gray" />
          </button>
        </h2>
        <p className="mt-2 text-sm tracking-wider text-left font-extralight text-dark-gray">
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

          <div className="flex justify-center gap-2 mx-auto my-6 ">
            <button
              type="submit"
              className="px-10 py-4 font-bold text-white rounded-md bg-theme-green hover:bg-theme-green/80 active:bg-theme-green/90"
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
