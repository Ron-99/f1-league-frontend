import axios from 'axios'

const api = axios.create({
    baseURL: "https://ec2-18-228-188-77.sa-east-1.compute.amazonaws.com:4000"
});

export default api;