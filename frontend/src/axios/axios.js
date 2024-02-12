import axios from "axios";
export const Axios = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  timeout: 1000,
  // headers: { 'Authorization': 'Bearer' + token }
});



