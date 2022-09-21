import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";
const serverUrl = process.env.REACT_APP_SERVER_URL;

export const AddItem = () => {
  const { hasUser } = useContext(AuthContext);
  const initialState = {
    name: "",
    photo: "https://picsum.photos/200/",
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
    try {
      event.preventDefault();
      const res = await axios.post(`${serverUrl}/tools/`, data, {
        headers: {
          Authorization: `Bearer ${hasUser.token}`,
          "Content-Type": "application/json",
        },
      });
      setData(initialState);
    } catch (err) {
      console.log(err);
    }
  };
  const inputStyle =
    "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ransition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <div className="m-auto w-11/12 max-w-xl">
      <h1 className="text-5xl font-medium text-center tracking-tighter uppercase">
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
        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-md font-bold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
