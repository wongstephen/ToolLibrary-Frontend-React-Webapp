import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;
// const URL = "http://localhost:8000";

export const userLogin = async (userInput) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/users/signin`,
      userInput
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const getUserToolsApi = async (token) => {
  try {
    const res = await axios.get(`${URL}/tools`, {
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
    const res = await axios.post(`${URL}/users/signup`, userData);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateTool = async (id, body) => {
  try {
    const token = await localStorage.getItem("token");
    const res = await axios.patch(`${URL}/tools/${id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.tool;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTool = async (id) => {
  try {
    const token = await localStorage.getItem("token");
    const res = await axios.delete(`${URL}/tools/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.tool;
  } catch (err) {
    console.log(err);
  }
};
