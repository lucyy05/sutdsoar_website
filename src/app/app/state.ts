import type { IAppConfig } from '@/app/config/IAppConfig';

export interface IAppState {
    locale: string | null;
    config: IAppConfig | null;
    defaultMessages: any;
    redirectTo: string | null;
    cookieConsentVersion: string;
}

export const AppDefaultState = (): IAppState => {
    return {
        locale: null,
        config: null,
        defaultMessages: {},
        redirectTo: null,
        cookieConsentVersion: '',
    };
};
