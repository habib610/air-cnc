import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://air-cnc.onrender.com",
});

export default axiosInstance;
