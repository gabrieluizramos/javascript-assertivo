import axios from 'axios';

const baseURL = `http://localhost:8080/api`;
const client = axios.create({ baseURL });

const response = {
  success: request => Promise.resolve(request.data),
  fail: request => Promise.reject(request.response.data.message)
}
client.interceptors.response.use(response.success, response.fail);
client.defaults.withCredentials = true;

export default client;
