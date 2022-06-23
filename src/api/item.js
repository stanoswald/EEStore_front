import request from "@/utils/request";
import config from "@/config/config";

// 根据id获取商品详细信息
export function getItemById(pro_id) {
    return request({
        url: config.BASE_URL+`/public/api/product/getItemListByProId`,
        method: "post",
        data: { pro_id }
    });
}

// 根据分类id获取列表
export function getItemListByCategory(categoryId) {
    return request({
        url: config.BASE_URL+`/public/api/product/getProductByCatId`,
        method: "post",
        data: {categoryId}
    });
}

// 获取所有信息
export function getItemList() {
    return request({
        url: config.BASE_URL+`/public/api/product/getProductList`,
        method: "get",
    });
}

// 添加至购物车
export function addToShopping(item_id,item_count) {
    return request({
        url: config.BASE_URL+`/user/api/cart/addCart`,
        method: "post",
        data:{item_id,item_count}
    });
}

// 提交订单
export function submitOrder(itemIdList) {
    return request({
        url: config.BASE_URL+`/addToShopping/`,
        method: "post",
        data:{itemIdList}
    });
}
