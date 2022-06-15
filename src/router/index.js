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
    {
        path: '/item/:id',
        name: 'item',
        component: () => import('@/view/Item/index'),
    },
    {
        path: '/order/:id',
        name: 'order',
        component: () => import('@/view/Order/index'),
    },

    {
        path: '/user',
        name: 'user',
        component: () => import('@/App'),
        children:[
            {
                path: 'login',
                name: 'login',
                component: () => import('@/view/User/Login/index'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/view/User/Register/index'),
            },
        ]
    },
    {
        path: '/order/:id',
        name: 'order',
        component: () => import('@/view/Order/index'),
    },
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes : routes
})
