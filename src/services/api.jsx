import axios from 'axios'

const api = axios.create({
    baseURL: "ec2-18-228-199-110.sa-east-1.compute.amazonaws.com:4000"
});

export default api;