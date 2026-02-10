import { createApp as createVueApp } from 'vue';
type VueApp = ReturnType<typeof createVueApp>; // app type
import { type Router } from 'vue-router';
import { type Store } from 'vuex';
import { type IState } from './state';
import { i18n } from '@shared/plugins/i18n/i18n';

import App from './app/App/App.vue'; // import App skeleton
import { router } from './router';
import { store } from './store';
import { HttpService } from '@shared/services/HttpService/HttpService';
import { srOnlyDirective } from './shared/directives';


// typescript interface for the app
// format: { name: Type }
export interface IApp { app: VueApp; router: Router; store: Store<IState>; i18n: typeof i18n; }

export const createApp = (): IApp => {
    HttpService.store = store;

    const app = createVueApp(App); // create the Vue Application instance

    // configure the app
    app.use(router);
    app.use(store);
    app.use(i18n);
    app.directive('sr-only', srOnlyDirective);

    return { app, router, store, i18n };
};
