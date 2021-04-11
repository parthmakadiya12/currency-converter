import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER || "http://localhost:8000/",
  headers: {
    Accept: "*",
  },
});
export default http;
