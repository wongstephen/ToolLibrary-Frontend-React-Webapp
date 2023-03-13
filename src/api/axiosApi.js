import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

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
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

export const addTool = async (body, token) => {
  try {
    await axios.post(`${URL}/tools/`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw err;
  }
};

export const updateTool = async (id, body, token) => {
  try {
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

export const deleteTool = async (id, token) => {
  try {
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
