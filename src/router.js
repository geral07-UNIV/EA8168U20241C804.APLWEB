import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/shared/presentation/views/home.vue");

/**
 * application router with semantic routes and root redirection to home
 */
const routes = [
    { path: '/',     redirect: '/home' },
    { path: '/home', name: 'home', component: Home, meta: { title: 'home' } }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
