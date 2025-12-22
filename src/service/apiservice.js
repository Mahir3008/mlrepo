import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const Apiservice = {
  get: async (path, config = {}) => {
    const res = await api.get(path, config);
    return res.data;
  },

  post: async (path, data = {}, config = {}) => {
    const res = await api.post(path, data, config);
    return res.data;
  },

  put: async (path, data = {}, config = {}) => {
    const res = await api.put(path, data, config);
    return res.data;
  },

  delete: async (path, config = {}) => {
    const res = await api.delete(path, config);
    return res.data;
  },
};