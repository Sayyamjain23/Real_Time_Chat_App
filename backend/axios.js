import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL:import.meta.env.MODE==="development"? "https://localhost:5000/api":"/api",
    withCredentials: true,
});