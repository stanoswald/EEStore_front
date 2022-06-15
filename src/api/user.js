import request from "@/utils/request";

// 注册方法
export function registerMember(formItem) {
    return request({
        url: `http://enten-forget:9000/register`,
        method: 'post',
        data:formItem
    })
}

//登录的方法
export function subjectLogin(userInfo) {
    return request({
        url: `/eduCenter/member/login`,
        method: 'post',
        data:userInfo
    })
}

//根据token获取用户信息
export function getLoginUserInfo() {
    return request({
        url: `/eduCenter/member/getMemberInfo`,
        method: 'get',
    })
}
