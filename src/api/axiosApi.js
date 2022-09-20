import axios from "axios";
import { React } from "react";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getUserToolsApi = async (setFeedData, token) => {
  try {
    const res = await axios.get(`${serverUrl}/tools`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFeedData(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const signInApi = async (e, loginValue, setUser, setShowErr) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${serverUrl}/users/signin`, loginValue);
    setUser(res.data);
    console.log(res.data);
  } catch (err) {
    console.log(err);
    setShowErr(true);
  }
};
