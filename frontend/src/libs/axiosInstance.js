import axios from "axios";

const axiosInstance = axios.create({

  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
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
