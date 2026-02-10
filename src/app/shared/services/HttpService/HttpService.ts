import type { Router } from 'vue-router';
import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Store } from 'vuex';
import type { IState } from '@/app/state';
import { setupResponseInterceptor } from './setupResponseInterceptor';
import { setupRequestInterceptor } from './setupRequestInterceptor';

export interface IHttpService extends AxiosInstance {
    store?: Store<IState>;
    router?: Router;
    isReAuthenticating?: boolean;
    pendingRequests?: any[];
}

export let HttpService: IHttpService = axios.create();

export const initHttpService = (store?: Store<IState>, router?: Router) => {
    /* istanbul ignore next */
    HttpService = axios.create({
        baseURL:
            (store &&
                store.state &&
                store.state.app &&
                store.state.app.config &&
                store.state.app.config.api &&
                store.state.app.config.api.baseUrl) ||
            '',
    });

    HttpService.store = store;
    HttpService.router = router;
    HttpService.isReAuthenticating = false;
    HttpService.pendingRequests = [];

    setupRequestInterceptor();
    setupResponseInterceptor();
};

export const replaceOldToken = (request: AxiosRequestConfig, accessToken: string): AxiosRequestConfig => {
    if (!request.headers) {
        request.headers = {};
    }
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
};
