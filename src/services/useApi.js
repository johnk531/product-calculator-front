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
      const response = await api.post(`/user/signin`, { email, password });
      return response.data;
  },
  createUser: async (username, email, password) => {
    const response = await api.post(`/user/create`, { username, email, password });
    return response.data;
  },
  readUser: async (email) => {
    const response = await api.get(`/user/read/${email}`);
    return response.data;
  },
  updateUser: async (username, email, password) => {
    const response = await api.put(`/user/update`, { username, email, password });
    return response.data;
  },
  deleteUser: async (email) => {
    const response = await api.delete(`/user/delete`, { email });
    return response.data;
  },
  listUser: async () => {
    const response = await api.get(`/user/list`);
    return response.data;
  }
})

export default useApi;