import type { RouteRecordRaw } from 'vue-router';

const formComponent = () => import(/* webpackChunkName: "form" */ './Form/Form.vue');

export const FormRoutes: RouteRecordRaw[] = [
    { path: '/example/form', name: 'form', component: formComponent },
    { path: '/form', name: 'form-alias', component: formComponent },
]
