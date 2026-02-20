import type { RouteRecordRaw } from 'vue-router';

export const AppRoutes: RouteRecordRaw[] = [
    {
        path: '/not-found',
        component: () => import(/* webpackChunkName: "notFound" */ './NotFound/NotFound.vue').then((m) => m.default),
    },

    {
        path: '/error',
        component: () => import(/* webpackChunkName: "error" */ './Error/Error.vue').then((m) => m.default),
    },

    // example redirect
    // Note: remove from production code
    /*{
        path: '/redirect',
        redirect: '/',
    },*/

    // catch-all route
    // shows 404 page and also makes server respond with HTTP status code 404
    // make sure to also adjust `src/server/isomorphic` in case you implement a more complex behavior here
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "notFound" */ './NotFound/NotFound.vue').then((m) => m.default),
    },
];
