import axios from "axios"
import { LS_KEY } from "../utils/constants.js";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
})

http.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem(LS_KEY.AUTH_TOKEN)
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default http
