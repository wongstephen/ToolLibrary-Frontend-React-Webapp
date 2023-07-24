import React from "react";
import { useDarkmode, ACTION } from "../reducers/Darkmode";
import { useNavigate } from "react-router-dom";
import { PageTemplate } from "./presentational/PageTemplate";
const UserSettingsPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useDarkmode();
  console.log(state.isDark);
  return (
    <PageTemplate>
      <div className="p-8">
        <h1 className="mb-8 text-2xl font-bold">Settings</h1>
        <ul className="flex flex-col gap-2">
          <li>Change Email</li>
          <li>Change Password</li>
          <li className="flex gap-4">
            Toggle Dark Mode
            <input
              type="checkbox"
              onClick={() => {
                dispatch({ type: ACTION.TOGGLE_DARKMODE });
              }}
            />
          </li>
        </ul>
        <button>Save</button>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Cancel
        </button>
      </div>
    </PageTemplate>
  );
};

export default UserSettingsPage;
