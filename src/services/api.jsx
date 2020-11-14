import axios from 'axios'

import {getToken} from './auth';

// PRD
const api = axios.create({
    baseURL: "https://api.e-racebrasil.com.br"
});


api.interceptors.request.use(async config => {
    const token = getToken();

    if(token)
        config.headers.common['x-access-token'] = token;

    return config;
});

export default api;