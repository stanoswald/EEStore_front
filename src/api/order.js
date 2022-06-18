import request from "@/utils/request";
import config from "@/config/config";

// 获取购物车信息
export function getShoppingList() {
    return request({
        url: config.BASE_URL+`/user/api/order/get`,
        method: 'get'
    })
}

// 根据id获取订单信息
export function getOrder(orderId) {
    return request({
        url: config.BASE_URL+`/user/api/order/get/${orderId}`,
        method: 'get'
    })
}
