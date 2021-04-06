import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://wouldyourather-api.herokuapp.com/"
    : "https://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
