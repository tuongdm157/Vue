import { createRouter, createWebHistory } from "vue-router";

const  Login = ()=> import( "../views/Login/Login.vue");
const  Home = ()=> import( "../views/Home/Home.vue");
const  Counter = ()=> import( "../views/Counter/Counter.vue");
const  Template = ()=> import( "../components/template/Template.vue");

const routerGuard = (to: any, from: any, next: any) =>{
    const loggedIn =  localStorage.getItem('LoggedUser');
    if(loggedIn){
        next();
    } else {
        next('/login');
    }

}

const routes = [
    {
        path: "/",
        name: "template",
        beforeEnter : routerGuard,
        component: Template,
        meta: {title: 'Template'},
        children: [
            {
                path: "",
                beforeEnter : routerGuard,
                component: Home,
            },
            {
                path: "/home",
                name: "home",
                beforeEnter : routerGuard,
                component: Home,
                meta: {title: 'Home'}
            },
            {
                path: "/counter",
                name: "counter",
                beforeEnter : routerGuard,
                component: Counter,
                meta: {title: 'Counter'}
            },
            {
                path: '/:pathMatch(.*)*',
                component: Home,
                name: 'home',
                meta: {title: 'home'}
            },
        ]
    },
    {
        path: "/login",
        component: Login,
        name: 'login',
        meta: {title: 'Login'}
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach(async (to, from) => {
//     // Verifying if the user is not authenticated
//     if (!localStorage.getItem('LoggedUser') && to.name !== "login") {
//         return {
//             name: "login",
//         };
//     }
// });

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('LoggedUser');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
export default router;
