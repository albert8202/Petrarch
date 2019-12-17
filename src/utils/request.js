import axios from 'axios'
import auth from "@/utils/auth";
import { Message } from 'element-ui'

function getAuthorization() {
    if (auth.getUser().token === undefined) {

    } else {
        return { 'Authorization': auth.getUser().token }
    }
}
const service = axios.create(({
    // baseURL: 'http://192.168.135.128:7300/mock/5dd6c9eacc546d0b141fb290',
<<<<<<< HEAD
    baseURL: 'http://118.25.153.97/',
    // baseURL: 'http://192.168.1.123:5000/',
=======
    baseURL: 'http://192.168.31.142:5000/',
>>>>>>> a34c4d5c4f7e4d717b10b8db6a9c3db6f7192cb2
    // baseURL: 'http://192.168.31.188:9003',
    timeout: 3000,
    headers: getAuthorization()
}));

service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        Message({
            message: error.message,
            type: 'error'
        })
        return Promise.reject(error)
    }
)
export default service;
