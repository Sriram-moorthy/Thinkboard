import axios from "axios";

// Use VITE_API_URL if set, otherwise fallback to localhost in development, or /api in production
const BASE_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:3001/api"
    : "/api");

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;