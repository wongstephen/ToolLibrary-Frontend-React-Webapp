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

export const signUp = async (userData) => {
  try {
    const res = await axios.post(`${serverUrl}/users/signup`, userData);
    return res;
  } catch (err) {
    return err;
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
