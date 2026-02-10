import type { Module } from 'vuex';
import { CounterDefaultState, type ICounterState } from './state';
import type { IState } from '@/app/state';
import { CounterActions } from './actions';
import { CounterGetters } from './getters';
import { CounterMutations } from './mutations';

export const CounterModule: Module<ICounterState, IState> = {
    namespaced: true,
    actions: {
        ...CounterActions,
    },
    getters: {
        ...CounterGetters,
    },
    state: {
        ...CounterDefaultState(),
    },
    mutations: {
        ...CounterMutations,
    },
};
