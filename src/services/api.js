import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

api.interceptors.request.use(
  async config => {
    const token = process.env.REACT_APP_TOKEN;

    config.headers['Authorization'] = `Bearer ${token}`;
        return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;