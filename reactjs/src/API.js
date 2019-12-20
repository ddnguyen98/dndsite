import axios from 'axios';

const API = axios.create({
  baseURL:
    process.env.API_URL ||
    'https://private-11d10b-threeheadeddragon.apiary-mock.com',
});

export default API;
