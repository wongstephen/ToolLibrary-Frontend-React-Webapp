import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";

export const AddItem = () => {
  const { hasUser } = useContext(AuthContext);

  const [data, setData] = useState({
    name: "",
    photo: "https://picsum.photos/200/",
    loanee: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => console.log(data), [data]);

  const addTool = async (event) => {
    try {
      event.preventDefault();
      const res = await axios.post("http://localhost:8000/tools/", data, {
        headers: {
          Authorization: `Bearer ${hasUser.token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("sucess");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={addTool}>
        <label htmlFor="name">Tool Name</label>
        <br />
        <textarea name="name" onChange={handleChange} value={data.toolname} />
        <br />
        <label htmlFor="photo">Image Url</label>
        <br />
        <input
          type="text"
          name="photo"
          placeholder="https://picsum.photos/200/"
          onChange={handleChange}
          value={data.photo}
        />
        <br />
        <label htmlFor="loanee">Loanee</label>
        <input name="loanee" onChange={handleChange} value={data.loanee} />
        {/* <select name="loanee">
          <option value=""></option>
          <option value="name">New Loanee</option>
          <option value="name">David</option>
          <option value="name">John</option>
          <option value="name">Rob</option>
        </select> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
