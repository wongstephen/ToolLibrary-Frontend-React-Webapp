import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;
// const serverUrl = "http://localhost:8000";
const lctoken = localStorage.getItem("token");

export const getUserToolsApi = async (token) => {
  try {
    const res = await axios.get(`${serverUrl}/tools`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const signInApi = async (e, loginValue, setShowErr) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${serverUrl}/users/signin`, loginValue);
    return res;
  } catch (err) {
    console.log(err);
    setShowErr(true);
  }
};

export const signUp = async (userData) => {
  try {
    const res = await axios.post(`${serverUrl}/users/signup`, userData);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updateTool = async (id, body) => {
  try {
    const res = await axios.patch(`${serverUrl}/tools/${id}`, body, {
      headers: {
        Authorization: `Bearer ${lctoken}`,
      },
    });
    return res.data.tool;
  } catch (err) {
    console.log(err);
  }
};
