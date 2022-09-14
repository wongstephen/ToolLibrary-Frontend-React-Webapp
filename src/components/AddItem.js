import React from "react";

export const AddItem = () => {
  return (
    <div>
      <form>
        <label for="toolname">Tool Name</label>
        <br />
        <textarea name="toolname"></textarea>
        <br />

        <br />
        <label for="loanee">Loanee</label>
        <select name="loanee">
          <option value=""></option>
          <option value="name">New Loanee</option>
          <option value="name">David</option>
          <option value="name">John</option>
          <option value="name">Rob</option>
        </select>
      </form>
    </div>
  );
};
