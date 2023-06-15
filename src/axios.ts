import axios, { InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://node-react-blog.onrender.com/",
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
    config.headers.Authorization = window.localStorage.getItem("token");

    return config;
  }
);

export default instance;
