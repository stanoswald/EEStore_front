import axios from "axios";
import {getToken} from "@/utils/auth";

const service = axios.create({
    timeout: 5000,
});

service.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'multipart/form-data'
        if (getToken('user_token')) {
            config.headers.Authorization = 'Bearer '+getToken('user_token');
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    (error) => {
        if(error.response.data.code === 400){
            console.log(error.response.data)
            alert(error.response.data.data.info)
            this.$message({
                message:error.response.data.data.info,
                type:'success'
            })
        }
        console.log(error);
        return Promise.reject();
    }
);

export default service;
