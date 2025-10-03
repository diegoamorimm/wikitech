import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://54.232.66.105:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
