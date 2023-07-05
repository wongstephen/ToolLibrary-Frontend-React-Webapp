import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

export const userCheckAxios = async (token) => {
  try {
    const res = await axios.get(`${URL}/users/single`, {
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
    const res = await axios.post(`${URL}/users/signin`, userInput);
    return res;
  } catch (err) {
    throw err;
  }
};

export const userRegisterAxios = async (userData) => {
  try {
    const res = await axios.post(`${URL}/users/signup`, userData);
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

export const toolFetchAxios = async (token) => {
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

export const toolCreateAxios = async (formData, token) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${URL}/tools/image`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
      },
      data: formData,
    };
    const response = await axios.request(config);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const toolUpdateAxios = async (id, body, token) => {
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

export const toolDeleteAxios = async (id, token) => {
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
