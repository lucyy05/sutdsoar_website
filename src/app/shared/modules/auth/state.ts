export interface IAuthState {
    accessToken: string | null;
    refreshToken: string | null;
}

export const AuthDefaultState = (): IAuthState => {
    return {
        accessToken: null,
        refreshToken: null,
    };
};
