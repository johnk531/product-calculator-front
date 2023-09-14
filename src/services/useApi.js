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

const useApi = () => ({
  signin: async (email, password) => {
      const response = await api.post('/user/signin', { email, password });
      return response.data;
  }
})

export default useApi;