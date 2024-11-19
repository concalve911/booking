import axios from "axios";

const api = axios.create({
  baseURL: "https://booking.free.beeceptor.com/hotels",
});

export default api;
