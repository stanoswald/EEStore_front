import request from "@/utils/request";

// 获取购物车信息
export function getShoppingList() {
    return request({
        url: `http://enten-forget:9000/getShoppingList`,
        method: 'get'
    })
}
