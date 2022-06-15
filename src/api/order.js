import request from "@/utils/request";

// 获取购物车信息
export function getShoppingList(userId) {
    return request({
        url: `http://enten-forget:9000/getShoppingList`+userId,
        method: 'get'
    })
}
