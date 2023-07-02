import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

export const checkUser = async (token) => {
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

export const userLogin = async (userInput) => {
  try {
    const res = await axios.post(`${URL}/users/signin`, userInput);
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

export const addTool = async (formData, token) => {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${URL}/tools/image`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };
    const response = await axios.request(config);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
/* 
export const addTool = async (formData, token) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${URL}/tools/image`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}; */

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
