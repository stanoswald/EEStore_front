import request from "@/utils/request";

// 根据id获取商品详细信息
export function getItemById(id) {
    return request({
        url: `http://enten-forget:9000/getItemById/`+id,
        method: "get",
    });
}

// 获取所有信息
export function getItemList() {
    return request({
        url: `http://enten-forget:9000/getItemList/`,
        method: "get",
    });
}

// 添加至购物车
export function addToShopping(itemId) {
    return request({
        url: `http://enten-forget:9000/addToShopping/`,
        method: "post",
        data:{itemId}
    });
}

// 提交订单
export function submitOrder(itemIdList) {
    return request({
        url: `http://enten-forget:9000/addToShopping/`,
        method: "post",
        data:{itemIdList}
    });
}
