import type { RouteRecordRaw } from 'vue-router';

export const LearnRoutes: RouteRecordRaw[] = [
    {
        path: '/learn',
        name: 'learn',
        component: () => import(/* webpackChunkName: "learn" */ './Learn/Learn.vue').then((m: any) => m.default),
    },
];
