import { type IAppConfig } from './IAppConfig';

export const AppConfig: IAppConfig = {
    api: {
        baseUrl: (import.meta.env.VITE_API_BASE_URL as string) || '/api',
    },
    features: {
        disableParticles: import.meta.env.VITE_DISABLE_PARTICLES === 'true',
    },
};
