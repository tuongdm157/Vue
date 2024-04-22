import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthLayout from "../layouts/AuthLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

const Login = () => import("../views/Login/Login.vue");
const Home = () => import("../views/Home/Home.vue");
const Counter = () => import("../views/Counter/Counter.vue");
const Template = () => import("../components/template/Template.vue");
const Customer = () =>
    import("../views/Customer/CustomerList/CustomerList.vue");
const CustomerAddEdit = () =>
    import("../views/Customer/AddEditCustomer/AddEditCustomer.vue");

const routerGuard = (to: any, from: any, next: any) => {
    const loggedIn = localStorage.getItem("LoggedIn");
    if (loggedIn) {
        next();
    } else {
        next("/login");
    }
};

const routes = [
    {
        path: "/",
        name: "template",
        beforeEnter: routerGuard,
        component: Template,
        meta: { title: "Template" },
        children: [
            {
                path: "",
                beforeEnter: routerGuard,
                component: Home,
            },
            {
                path: "/home",
                name: "home",
                beforeEnter: routerGuard,
                component: Home,
                meta: { title: "Home" },
            },
            {
                path: "/counter",
                name: "counter",
                beforeEnter: routerGuard,
                component: Counter,
                meta: { title: "Counter" },
            },
            {
                path: "/customers",
                beforeEnter: routerGuard,
                component: Customer,
                meta: { title: "Home" },
            },
            {
                path: "/customers/new",
                beforeEnter: routerGuard,
                component: CustomerAddEdit,
                meta: { title: "CustomerAddEdit" },
            },
            {
                path: "/customers/:id",
                beforeEnter: routerGuard,
                component: CustomerAddEdit,
                meta: { title: "CustomerAddEdit" },
            },
            {
                path: "/:pathMatch(.*)*",
                component: Home,
                name: "home",
                meta: { title: "home" },
            },
        ],
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: { title: "Login", layout: AuthLayout },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ["/login"];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem("LoggedIn");

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next("/login");
    } else {
        next();
    }
});
export default router;
