import { createRouter, createWebHistory, type RouteLocationNormalized, type RouteRecordNormalized } from 'vue-router';
import { AppRoutes } from './app/routes';
import { HomeRoutes } from './home/routes';
import { CounterRoutes } from './example/counter/routes';
import { FormRoutes } from './example/form/routes';
import { DashboardRoutes } from './example/dashboard/routes';
import { store } from '@/app/store';
import { LearnRoutes } from './learn/routes';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...AppRoutes, ...HomeRoutes, ...CounterRoutes, ...FormRoutes, ...DashboardRoutes, ...LearnRoutes],
    scrollBehavior(to, _from, savedPosition) {
        if (to.hash) {
            return { el: to.hash };
        }
        return savedPosition || { top: 0, left: 0 };
    },
});

// example guard
// TODO remove or adjust in production code
router.beforeEach((to: RouteLocationNormalized, _from: RouteLocationNormalized, next: any) => {
    if (to.matched.some((record: RouteRecordNormalized) => record.meta.requiresAuth)) {
        const isAuthenticated = store.getters['auth/isAuthenticated'];

        if (!isAuthenticated) {
            next({ path: '/', query: { redirect: to.fullPath } });
        } else {
            next();
        }
    } else {
        next();
    }
});
