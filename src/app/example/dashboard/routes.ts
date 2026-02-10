import type { RouteRecordRaw } from 'vue-router';

export const DashboardRoutes: RouteRecordRaw[] = [
    {
        path: '/example/dashboard',
        name: 'dashboard',
        component: () =>
            import(/* webpackChunkName: "dashboard" */ './Dashboard/Dashboard.vue').then((m: any) => m.default),
        meta: {
            requiresAuth: true,
        },
    },
];
