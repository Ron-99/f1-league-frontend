import axios from 'axios'

import {getToken, getEmail} from './auth';

// PRD
const api = axios.create({
    baseURL: "https://api.e-racebrasil.com.br"
});

// STG
// const api = axios.create({
//     baseURL: "http://ec2-52-67-113-37.sa-east-1.compute.amazonaws.com:8080"
// });

// DEV
// const api = axios.create({
//     baseURL: "http://localhost:3333"
// });

api.interceptors.request.use(async config => {
    const token = getToken();
    const email = getEmail();

    if(token){
        config.headers.common['x-access-token'] = token;
        config.headers.common['emailUser'] = email;
    }
    return config;
});

export default api;
