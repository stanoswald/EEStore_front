import request from "@/utils/request";
import config from "@/config/config";

// 获取购物车信息
export function getShoppingList() {
    return request({
        url: config.BASE_URL+`/user/api/cart/get`,
        method: 'post',
    })
}

// 查看订单信息
export function getOrderList() {
    return request({
        url: config.BASE_URL+`/user/api/order/get/all`,
        method: 'get',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}

// 创建订单
export function createOrder(item_price,address,item_list) {
    return request({
        url: config.BASE_URL+`/user/api/order/create`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data : {item_price,address,item_list}
    })
}

// 根据id获取订单信息
export function getOrder(orderId) {
    return request({
        url: config.BASE_URL+`/user/api/order/get/${orderId}`,
        method: 'get'
    })
}
