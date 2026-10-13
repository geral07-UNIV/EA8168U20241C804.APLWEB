import { createRouter, createWebHistory } from "vue-router";
import showroomRoutes from "@/showroom/presentation/showroom-routes.js";

const Home          = () => import("@/shared/presentation/views/home.vue");
const PageNotFound  = () => import("@/shared/presentation/views/page-not-found.vue");

/**
 * application router with semantic routes, bounded context child routes and page not found fallback
 */
const routes = [
    { path: '/',                 redirect: '/home' },
    { path: '/home',             name: 'home', component: Home, meta: { title: 'home' } },
    { path: '/vehicle',          children: showroomRoutes },
    { path: '/:pathMatch(.*)*',  name: 'page-not-found', component: PageNotFound, meta: { title: 'page not found' } }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
