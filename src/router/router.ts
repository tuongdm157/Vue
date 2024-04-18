import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/Home/HelloWorld.vue"),
    },
    {
        path: "/counter",
        component: () => import("../views/Counter/Counter.vue"),
    },
    {
        path: "/login",
        component: () => import("../views/Login/Login.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
