import request from "@/utils/request";

export function getItemById(id) {
    return request({
        url: `http://enten-forget:9000/getItemById/`+id,
        method: "get",
    });
}

export function getItemList() {
    return request({
        url: `http://enten-forget:9000/getItemList/`,
        method: "get",
    });
}
