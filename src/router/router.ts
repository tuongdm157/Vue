import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: () => import("../views/Home/HelloWorld.vue"),
    }, {
        path: "/counter",
        component: () => import("../views/Counter/Counter.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router