import { createStore, Store } from 'vuex';
import type { Module } from 'vuex';
import merge from 'deepmerge';
import { DefaultState } from './state';
import type { IState } from './state';
import { VuexPersist } from '@vuesion/addon-vuex-persist';
import { PersistCookieStorage } from '@vuesion/addon-vuex-persist/dist/PersistCookieStorage';
import { AppModule } from './app/module';
import { AuthModule } from '@shared/modules/auth/module';

const state: IState = (typeof window !== 'undefined' && (window as any).__INITIAL_STATE__) || DefaultState;


/* istanbul ignore next */
const beforePersistCookieStorage = (localState: IState): IState => {
    if (localState.app) {
        localState.app.config = undefined as any;
        localState.app.defaultMessages = undefined as any;
        localState.app.redirectTo = undefined as any;
    }

    return localState;
};

export const store: Store<IState> = createStore({
    state,
    plugins: [
        VuexPersist([
            new PersistCookieStorage(['app', 'auth'], {
                cookieOptions: {
                    expires: 365,
                },
                beforePersist: beforePersistCookieStorage,
            }),
        ]),
    ],
});

export const registerModule = (moduleName: string, module: Module<any, any>) => {
    const moduleIsRegistered: boolean = (store as any)._modules.root._children[moduleName] !== undefined;
    const stateExists: boolean = store.state[moduleName] !== undefined;

    if (stateExists) {
        module.state = merge(module.state, store.state[moduleName], {
            clone: false,
            arrayMerge: /* istanbul ignore next */ (_target: any, source: any) => {
                return source;
            },
        });
    }

    if (!moduleIsRegistered) {
        store.registerModule(moduleName, module, { preserveState: false });
    }
};

registerModule('app', AppModule);
registerModule('auth', AuthModule);
