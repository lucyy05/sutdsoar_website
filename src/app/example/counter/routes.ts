import type { RouteRecordRaw } from 'vue-router';

export const CounterRoutes: RouteRecordRaw[] = [
    {
        path: '/example/counter',
        name: 'counter',
        component: () => import(/* webpackChunkName: "counter" */ './Counter/Counter.vue').then((m: any) => m.default),
    },
];
