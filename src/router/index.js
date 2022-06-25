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
                path: 'personal',
                name: 'personal',
                component: () => import('@/view/User/Personal/index'),
            },
            {
                path: 'shopping',
                name: 'shopping',
                component: () => import('@/view/User/Shopping/index'),
            },
            {
                path: 'order',
                name: 'order',
                component: () => import('@/view/Order/index'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/Login/index'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/view/Register/index'),
    }
]

export const router = createRouter({
    history:createWebHashHistory(),
    routes : routes
})
