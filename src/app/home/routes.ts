import type { RouteRecordRaw } from 'vue-router';

export const HomeRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './Home/Home.vue').then((m: any) => m.default),
    },
];
