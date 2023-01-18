import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PageTemplate } from "./presentational/PageTemplate";
import { ChooseAvator } from "./presentational/ChooseAvator";
const serverUrl = process.env.REACT_APP_SERVER_URL;
// const serverUrl = "http://localhost:8000";
export const AddItem = () => {
  const navigate = useNavigate();

  const initialState = {
    name: "",
    photo: "https://loremflickr.com/200/200",
    loanee: "",
    avator: "empty",
  };
  const [data, setData] = useState(initialState);

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
    "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded ransition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none my-5";

  return (
    <PageTemplate>
      <form onSubmit={addTool}>
        {/* <label htmlFor="floatingInput" className="">Tool Name</label> */}
        <input
          name="name"
          className={inputStyle}
          onChange={handleChange}
          value={data.name}
          placeholder="Tool Name"
        />

        {/* <label htmlFor="photo">Image Url</label> */}

        {/* Images / Future implementation
        
        <input
          className={inputStyle}
          type="text"
          name="photo"
          placeholder="https://picsum.photos/200/"
          onChange={handleChange}
          value={data.photo}
        /> */}

        {/* <label htmlFor="loanee">Loanee</label> */}
        <input
          name="loanee"
          onChange={handleChange}
          value={data.loanee}
          className={inputStyle}
          placeholder="Borrower"
        />
        <ChooseAvator setData={setData} />
        <br />
        <div className="flex justify-between mt-8">
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
              navigate("/feed");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};
