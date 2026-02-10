import { Store } from 'vuex';
import { IState } from './app/state';
import { Router, RouteLocationNormalized } from 'vue-router';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<IState>;
        $router: Router;
        $route: RouteLocationNormalized;
        $t: (key: string, values?: any) => string;
        $d: (value: Date | number | string, key?: string, locale?: string) => string;
        $n: (value: number, key?: string, locale?: string) => string;
        $tm: (key: string) => any;
        $te: (key: string, locale?: string) => boolean;
    }
}
