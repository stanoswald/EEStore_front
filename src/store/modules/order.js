const state = {
    order:{}
}
const mutations = {
    setOrder(itemPrice,address,itemList){
        state.order.item_price = itemPrice
        state.order.address = address
        state.order.item_list = itemList
    },

    clear(){
        state.order = {}
    }
}
const getters = {
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
