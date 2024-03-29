import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// currently transitioning app to use axios class instance.
