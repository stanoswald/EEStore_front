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
export function getOrder(order_id) {
    return request({
        url: config.BASE_URL+`/user/api/order/get?order_id=${order_id}`,
        method: 'get'
    })
}

// 获取待发货订单
export function getWaiting() {
    return request({
        url: config.BASE_URL+`/user/api/order/get/to_be_delivered`,
        method: 'get',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}

// 订单收货情况
export function getStatus(order_id) {
    return request({
        url: config.BASE_URL+`/user/api/order/finish`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:{order_id}
    })
}

// 订单地址修改
export function amendAddress(order_id,address) {
    return request({
        url: config.BASE_URL+`/user/api/order/modify_address`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:{order_id,address}
    })
}
