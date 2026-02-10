import { AppDefaultState, type IAppState } from './app/state';
import { AuthDefaultState, type IAuthState } from './shared/modules/auth/state';
import type { ICounterState } from './example/counter/state';
import type { ILearnState } from './learn/state';

export interface IState {
    [key: string]: any;

    app?: IAppState;
    auth?: IAuthState;
    counter?: ICounterState;
    learn?: ILearnState;
}

export const DefaultState: IState = {
    app: AppDefaultState(),
    auth: AuthDefaultState(),
};
