import request from "@/utils/request";
import config from "@/config/config";

// 根据id获取商品详细信息
export function getItemById(product_id) {
    return request({
        url: config.BASE_URL+`/public/api/product/get/product`,
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: { product_id }
    });
}

// 根据分类id获取列表
export function getItemListByCategory(categoryId) {
    return request({
        url: config.BASE_URL+`/public/api/product/get/cat`,
        method: "post",
        data: {categoryId}
    });
}

// 获取所有信息
export function getItemList() {
    return request({
        url: config.BASE_URL+`/public/api/product/get/list`,
        method: "get",
    });
}

// 添加至购物车
export function addToShopping(item_id,item_count) {
    return request({
        url: config.BASE_URL+`/user/api/cart/add`,
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:{item_id,item_count}
    });
}

// 提交订单
export function submitOrder(itemIdList) {
    return request({
        url: config.BASE_URL+`/addToShopping/`,
        method: "post",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data:{itemIdList}
    });
}
