import axios from "axios";

const BASE_URL = process.env.local.REACT_APP_SERVER_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
