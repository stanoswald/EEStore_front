import request from "@/utils/request";
import config from "@/config/config";

// 注册方法
export function registerMember(formItem) {
    return request({
        url: config.BASE_URL+`/register`,
        method: 'post',
        data:formItem
    })
}

//登录的方法
export function subjectLogin(userInfo) {
    return request({
        url: config.BASE_URL+`/auth/login`,
        method: 'post',
        data:userInfo
    })
}

//根据token获取用户信息
export function getLoginUserInfo() {
    return request({
        url: config.BASE_URL+`/eduCenter/member/getMemberInfo`,
        method: 'get',
    })
}
