import type { Module } from 'vuex';
import type { IState } from '@/app/state';
import { AuthDefaultState, type IAuthState } from './state';
import { AuthActions } from './actions';
import { AuthGetters } from './getters';
import { AuthMutations } from './mutations';

export const AuthModule: Module<IAuthState, IState> = {
    namespaced: true,
    actions: {
        ...AuthActions,
    },
    getters: {
        ...AuthGetters,
    },
    state: {
        ...AuthDefaultState(),
    },
    mutations: {
        ...AuthMutations,
    },
};
