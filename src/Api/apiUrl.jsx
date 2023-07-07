import axios from "axios";

let axiosInstance = axios.create({
    baseURL : process.env.React_APP_BASE_URL,
});

export default axiosInstance;