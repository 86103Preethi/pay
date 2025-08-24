// src/api/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://64.227.189.27/wallet/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Attach token (replace with localStorage/session if you store it dynamically)
apiClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
