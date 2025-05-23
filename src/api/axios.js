import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Change to your API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default axiosInstance;
