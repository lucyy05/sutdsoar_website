import type { ActionContext } from 'vuex';
import type { ICounterState } from './state';
import type { IState } from '@/app/state';
import { HttpService } from '@shared/services/HttpService/HttpService';

export interface ICounterResponse {
    count: number;
}

export interface ICounterActions {
    increment(context: ActionContext<ICounterState, IState>): Promise<any>;

    decrement(context: ActionContext<ICounterState, IState>): Promise<any>;
}

export const CounterActions: ICounterActions = {
    async increment({ commit, state }: ActionContext<ICounterState, IState>) {
        commit('SET_INCREMENT_PENDING', true);

        try {
            const res = await HttpService.put<ICounterResponse>('/counter/increment', { count: state.count });

            commit('SET_COUNT', res.data.count);
            commit('SET_INCREMENT_PENDING', false);
        } catch (e) {
            commit('SET_INCREMENT_PENDING', false);
            throw new Error(e as string);
        }
    },
    async decrement({ commit, state }: ActionContext<ICounterState, IState>) {
        commit('SET_DECREMENT_PENDING', true);

        try {
            const res = await HttpService.put<ICounterResponse>('/counter/decrement', { count: state.count });

            commit('SET_COUNT', res.data.count);
            commit('SET_DECREMENT_PENDING', false);
        } catch (e) {
            commit('SET_DECREMENT_PENDING', false);
            throw new Error(e as string);
        }
    },
};
