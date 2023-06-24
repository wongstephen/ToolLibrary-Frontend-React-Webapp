import axios from "axios";

// const URL = process.env.REACT_APP_SERVER_URL;
const URL = "http://localhost:8000";

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
  // try {
  //   await axios.post(`${URL}/tools/image`, body, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });
  // } catch (err) {
  //   throw err;
  // }

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
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
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
