import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const AddItem = () => {
  const { hasUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialState = {
    name: "",
    photo: "https://loremflickr.com/200/200",
    loanee: "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const addTool = async (event) => {
    event.preventDefault();
    if (!data.name) {
      return;
    }
    try {
      const token = await localStorage.getItem("token");
      const res = await axios.post(`${serverUrl}/tools/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      setData(initialState);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const inputStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ransition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div className="h-full py-10 bg-gradient-to-b from-lime-200 to-lime-300">
      <div className="w-11/12 max-w-xl m-auto">
        <h1 className="text-5xl font-medium tracking-tighter text-center uppercase">
          Tool Loaner
        </h1>

        <form onSubmit={addTool}>
          <br />
          <label htmlFor="floatingInput">Tool Name</label>
          <input
            name="name"
            className={inputStyle}
            onChange={handleChange}
            value={data.name}
          />

          <br />
          <label htmlFor="photo">Image Url</label>
          <br />
          <input
            className={inputStyle}
            type="text"
            name="photo"
            placeholder="https://picsum.photos/200/"
            onChange={handleChange}
            value={data.photo}
          />
          <br />
          <label htmlFor="loanee">Loanee</label>
          <input
            name="loanee"
            onChange={handleChange}
            value={data.loanee}
            className={inputStyle}
          />
          <br />
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-6 py-3 font-bold text-white bg-blue-600 rounded-md"
              onClick={addTool}
            >
              Submit
            </button>
            <button
              type="button"
              className="px-6 py-3 font-bold text-white bg-red-600 rounded-md"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
