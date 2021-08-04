import axios from 'axios';

const errors = {
  'Network Error': 'Erro de rede. O servidor está rodando?'
};

const baseURL = `http://localhost:8080/api`;
const client = axios.create({ baseURL });

const response = {
  success: request => Promise.resolve(request.data),
  fail: error => {
    if (error.isAxiosError) {
      const message = errors[error.message] || error.message;
      return Promise.reject(message);
    }
    return Promise.reject(error.response.data.message)
  }
}
client.interceptors.response.use(response.success, response.fail);
client.defaults.withCredentials = true;

export default client;
