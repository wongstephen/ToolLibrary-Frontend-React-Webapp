import React, { useEffect, useState } from "react";
import { PageTemplate } from "./presentational/PageTemplate";
import { useLocation, useNavigate } from "react-router-dom";
import { toolUpdateAxios, toolDeleteAxios } from "../api/axiosApi";
import { ChooseAvator } from "./presentational/ChooseAvator";
import { XCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import useAuth from "../hooks/useAuth";

export const ItemEdit = () => {
  const location = useLocation();
  const { user, updateUserData } = useAuth();

  const navigate = useNavigate();
  const tool = location.state;
  const [body, setBody] = useState({
    name: tool.name,
    photo: tool.photo,
    loanee: tool.loanee,
    avator: tool.avator,
  });

  const [submitErr, setSubmitErr] = useState(false);
  useEffect(() => {
    setSubmitErr(() => {
      return false;
    });
  }, [body]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBody((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const editTool = async (e) => {
    e.preventDefault();
    if (!body.name) {
      setSubmitErr(() => {
        return true;
      });
      return;
    }
    try {
      await toolUpdateAxios(tool._id, body, user.token);
      updateUserData();
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelTool = async (e) => {
    e.preventDefault();
    try {
      await toolDeleteAxios(tool._id, user.token);
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
        <form onSubmit={editTool} className="flex flex-col gap-4 mt-4">
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
            value={body.name}
            onChange={handleChange}
          />
          <label className="sr-only" htmlFor="name">
            Borrower Name
          </label>
          <input
            name="loanee"
            className={inputStyle}
            placeholder="Borrower"
            //   defaultValue={tool.loanee}
            value={body.loanee}
            onChange={handleChange}
          />
          <ChooseAvator setData={setBody} currentAvator={tool.avator} />
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
