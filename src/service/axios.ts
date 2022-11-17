import axios from 'axios';

const service = axios.create({
    baseURL: '/'
})

service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    return response.data;
}, error => {
    return Promise.reject(error);
})

export default service;