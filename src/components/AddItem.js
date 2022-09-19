import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";

export const AddItem = () => {
  const { hasUser } = useContext(AuthContext);
  const addTool = async () => {
    const res = axios.post("http://localhost:8000/tools/", {
      headers: {
        Authorization: `Bearer ${hasUser}`
      }
    })
  return (
    <div>
      <form>
        <label for="toolname">Tool Name</label>
        <br />
        <textarea name="toolname"></textarea>
        <br />
        <label for="photo">Image Url</label>
        <br />
        <input
          type="text"
          name="photo"
          placeholder="https://picsum.photos/200/"
        />
        <br />
        <label for="loanee">Loanee</label>
        <select name="loanee">
          <option value=""></option>
          <option value="name">New Loanee</option>
          <option value="name">David</option>
          <option value="name">John</option>
          <option value="name">Rob</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
