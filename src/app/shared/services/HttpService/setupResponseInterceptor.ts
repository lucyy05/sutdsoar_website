import { HttpService, replaceOldToken } from './HttpService';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

function flushPendingRequests(error: any, accessToken?: string) {
    HttpService.pendingRequests?.forEach((promise: any) => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(accessToken);
        }
    });

    HttpService.isReAuthenticating = false;
    HttpService.pendingRequests = [];
}

const isAuthError = (error: AxiosError): boolean => {
    return !!error.response && error.response.status === 401;
};

export const setupResponseInterceptor = () => {
    const onRejected = (error: AxiosError) => {
        if (!error.config) {
            return Promise.reject(error);
        }
        const originalRequest = error.config as AxiosRequestConfig;

        if (isAuthError(error)) {
            if (HttpService.isReAuthenticating) {
                return new Promise<string>((resolve, reject) => {
                    HttpService.pendingRequests?.push({ resolve, reject });
                })
                    .then((accessToken: string) => {
                        return HttpService(replaceOldToken(originalRequest, accessToken));
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            HttpService.isReAuthenticating = true;

            console.log('refreshing token ...'); // tslint:disable-line
            return new Promise(async (resolve, reject) => {
                try {
                    if (HttpService.store) {
                        await HttpService.store.dispatch('auth/refreshToken');

                        console.log('refreshing token successful ...'); // tslint:disable-line
                        if (HttpService.store.state.auth) {
                            const {
                                auth: { accessToken },
                            } = HttpService.store.state;

                            flushPendingRequests(null, accessToken);
                            resolve(HttpService(replaceOldToken(originalRequest, accessToken)));
                        }
                    }
                } catch (e: any) {
                    console.log('refreshing token failure ...'); // tslint:disable-line
                    e.status = 403;

                    flushPendingRequests(e);
                    reject(e);
                    if (HttpService.router) {
                        HttpService.router.push('/');
                    }
                }
            });
        }

        return Promise.reject(error);
    };

    HttpService.interceptors.response.use((response: AxiosResponse) => response, onRejected);
};
