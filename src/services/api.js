import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

api.interceptors.request.use(async config => {
    const token = process.env.REACT_APP_TOKEN;

    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;