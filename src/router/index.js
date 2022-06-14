import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/view/Home/index'),
    },
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes : routes
})
