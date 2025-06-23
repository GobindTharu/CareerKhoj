import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://career-khoj-backend.onrender.com",
  timeout: 5000, //5 second
});

axiosInstance.interceptors.request.use(function (config) {
  const accessToken = window.localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
export default axiosInstance;
