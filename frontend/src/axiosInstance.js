// axiosInstance.js

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5000/api/users", 
  timeout: 5000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem("REACT_APP_BASE_URL"); // Replace with your token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors, e.g., redirect to login page
      console.log("Unauthorized access, redirecting to login");
      // You can use react-router or other navigation logic here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
