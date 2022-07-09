const state = {
    order:{}
}
const mutations = {
    setOrder(state,order){
        console.log("itemPrice")
        console.log(order)
        state.order.item_price = order.itemPrice
        state.order.address = order.address
        state.order.item_list = order.itemList
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
