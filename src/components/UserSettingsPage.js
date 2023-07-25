import React, { useEffect, useRef, useState } from "react";
import { useDarkmode, ACTION } from "../reducers/Darkmode";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { userUpdateAxios } from "../api/axiosApi";
import Button from "./presentational/Button";
const UserSettingsPage = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useDarkmode();
  const { user, refreshUserData } = useAuth();
  const darkmodeInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(() => true);
    if (user.user.darkmode !== darkmodeInputRef.current.checked) {
      dispatch({ type: ACTION.TOGGLE_DARKMODE });
      const userInput = { darkmode: darkmodeInputRef.current.checked };
      console.log(userInput);
      try {
        await userUpdateAxios(user.token, user.user._id, userInput);
        await refreshUserData(user.token);
        navigate("/home");
      } catch (err) {
        console.log("Something went wrong");
      } finally {
        setIsLoading(() => false);
      }
    }
    setIsLoading(() => false);
    navigate("/home");
  };

  useEffect(() => {
    console.log(user);
    darkmodeInputRef.current.checked = state.isDark;
  }, []);

  return (
    <div>
      <div className="p-8">
        <h1 className="mb-8 text-2xl font-bold">Settings</h1>
        <ul className="flex flex-col gap-2">
          {/* <li>Change Email</li>
          <li>Change Password</li> */}
          <li className="flex gap-4">
            Toggle Dark Mode
            <input type="checkbox" ref={darkmodeInputRef} />
          </li>
        </ul>
        <div className="flex gap-4 pt-8">
          <Button
            cname="border-2"
            handleClick={handleSave}
            isDisabled={isLoading ? true : false}
          >
            Save
          </Button>
          <Button
            cname="border-2"
            handleClick={() => {
              navigate("/home");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
