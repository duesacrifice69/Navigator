import axios from "axios";

const config = {
  header: {
    "Content-type": "application/json",
  },
};

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000",
  headers:{
    get:{
      Authorization:localStorage.getItem("token")
    },
    post:{
      Authorization:localStorage.getItem("token")
    }
  }
}); // 10.0.19.177

const signin = async (loginData) => {
  const response = await API.post("api/users/login", loginData, config);
  return response.data;
};

const signup = async (data) => {
  const response = await API.post("api/users/register", data, config);
  return response.data;
};

const sendVerificationCode = async (data) => {
  const response = await API.post(
    "api/users/sendVerificationCode",
    data,
    config
  );
  return response.data;
};

const submitVerficationCode = async (data) => {
  const response = await API.post(
    "api/users/submitVerificationCode",
    data,
    config
  );
  return response.data;
};

const changePassword = async (data) => {
  const response = await API.post("api/users/resetPassword", data, config);
  return response.data;
};

const getCirculars = async (data) => {
  const response = await API.get(
    "api/users/permmissions/authnew",
    data,
    config
  );
  return response.data;
};

const getAttendance = async (data) => {
  const response = await API.get("api/users/attendance", data, config);
  return response.data;
};

const getLeaves = async (data) => {
  const response = await API.get("api/users/leaves", data, config);
  return response.data;
};

const getIncome = async (data) => {
  const response = await API.get("api/users/leavess", data, config);
  return response.data;
};

const getEvents = async (data) => {
  const response = await API.get("api/users/events", data, config);
  return response.data;
};
const getLiabilitieses = async (data) => {
  const response = await API.get("api/users/liabilities", data, config);
  return response.data;
};
const getdeduction = async (data) => {
  const response = await API.get("api/users/deduction", data, config);
  return response.data;
};

const api = {
  signin,
  signup,
  submitVerficationCode,
  sendVerificationCode,
  changePassword,
  getCirculars,
  getAttendance,
  getLeaves,
  getIncome,
  getEvents,
  getLiabilitieses,
  getdeduction,
};
export default api;
