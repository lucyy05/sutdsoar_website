import type { Module } from 'vuex';
import { AppDefaultState, type IAppState } from './state';
import { AppActions } from './actions';
import { AppGetters } from './getters';
import { AppMutations } from './mutations';

export const AppModule: Module<IAppState, IAppState> = {
    namespaced: true,
    actions: {
        ...AppActions,
    },
    getters: {
        ...AppGetters,
    },
    state: {
        ...AppDefaultState(),
    },
    mutations: {
        ...AppMutations,
    },
};
