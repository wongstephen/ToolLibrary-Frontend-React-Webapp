import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

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
