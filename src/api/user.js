import request from "@/utils/request";
import config from "@/config/config";

// 注册方法
export function registerMember(formItem) {
    return request({
        url: config.BASE_URL+`/auth/register`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:formItem
    })
}

//登录的方法
export function subjectLogin(userInfo) {
    return request({
        url: config.BASE_URL+`/auth/login`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:userInfo
    })
}

//修改密码
export function updateUserInfo(old_password,new_password) {
    return request({
        url: config.BASE_URL+`/user/api/update/password`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:{old_password,new_password}
    })
}

//根据token获取用户信息
export function getUserInfo() {
    return request({
        url: config.BASE_URL+`/user/api/get`,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        method: 'get',
    })
}
