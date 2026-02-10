import { HttpService } from './HttpService';
import type { InternalAxiosRequestConfig, AxiosError } from 'axios';

export function setupRequestInterceptor() {
    HttpService.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token: string | undefined = HttpService.store?.state?.auth?.accessToken;

            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        /* istanbul ignore next */
        (error: AxiosError) => {
            return Promise.reject(error);
        },
    );
}
