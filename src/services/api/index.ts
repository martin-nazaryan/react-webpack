import axios from 'axios';

const apiInstance = axios.create({
  baseURL:  process.env.API_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default apiInstance
