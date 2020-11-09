import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.e-racebrasil.com.br"
});

export default api;