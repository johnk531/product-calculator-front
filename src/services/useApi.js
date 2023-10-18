import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

const useApi = () => ({
  // user
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
  },
  //product
  createProduct: async (nome, marca, quantidade, tipoquantidade, valor, _id_user) => {
    const response = await api.post(`/product/create`, { nome, marca, quantidade, tipoquantidade, valor, _id_user });
    return response.data;
  },
  readProduct: async (_id) => {
    const response = await api.get(`/product/read/${_id}`);
    return response.data;
  },
  updateProduct: async (_id, nome, marca, quantidade, tipoquantidade, valor, _id_user) => {
    const response = await api.put(`/product/update`, { _id, nome, marca, quantidade, tipoquantidade, valor, _id_user });
    return response.data;
  },
  deleteProduct: async (_id) => {
    const response = await api.delete(`/product/delete`, { _id });
    return response.data;
  },
  listProduct: async () => {
    const response = await api.get(`/product/list`);
    return response.data;
  },
  //receita
  createRecipe: async (nome, products, valor, _id_user) => {
    const response = await api.post(`/product/create`, { nome, products, valor, _id_user });
    return response.data;
  },
  readRecipe: async (_id) => {
    const response = await api.get(`/recipe/read/${_id}`);
    return response.data;
  },
  updateRecipe: async (_id, nome, products, valor, _id_user) => {
    const response = await api.put(`/recipe/update`, { _id, nome, products, valor, _id_user });
    return response.data;
  },
  deleteRecipe: async (_id) => {
    const response = await api.delete(`/recipe/delete`, { _id });
    return response.data;
  },
  listRecipe: async () => {
    const response = await api.get(`/recipe/list`);
    return response.data;
  },
})

export default useApi;