import axios from "axios";

const URL = process.env.REACT_APP_ENV.includes("DEVELOPMENT")
  ? process.env.REACT_APP_LOCAL_SERVER_URL
  : process.env.REACT_APP_SERVER_URL;

export const userCheckAxios = async (token) => {
  try {
    const res = await axios.get(`${URL}/user/single`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const userLoginAxios = async (userInput) => {
  try {
    const res = await axios.post(`${URL}/user/signin`, userInput);
    return res;
  } catch (err) {
    throw err;
  }
};

export const userRegisterAxios = async (userData) => {
  try {
    const res = await axios.post(`${URL}/user/signup`, userData);
    return res;
  } catch (err) {
    throw err;
  }
};

export const toolFetchAxios = async (token) => {
  try {
    const res = await axios.get(`${URL}/tool`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const toolCreateAxios = async (formData, token) => {
  try {
    let config = {
      method: "POST",
      url: `${URL}/tool`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };
    const response = await axios.request(config);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const toolUpdateAxios = async (toolId, body, token) => {
  try {
    const res = await axios.patch(`${URL}/tool/${toolId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      },
      maxBodyLength: Infinity,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const toolDeleteAxios = async (id, token) => {
  try {
    const res = await axios.delete(`${URL}/tool/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.tool;
  } catch (err) {
    console.log(err);
  }
};
