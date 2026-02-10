import type { Module } from 'vuex';
import type { IState } from '@/app/state';
import { LearnDefaultState, type ILearnState } from './state';
import { LearnActions } from './actions';
import { LearnGetters } from './getters';
import { LearnMutations } from './mutations';

export const LearnModule: Module<ILearnState, IState> = {
    namespaced: true,
    actions: {
        ...LearnActions,
    },
    getters: {
        ...LearnGetters,
    },
    state: {
        ...LearnDefaultState(),
    },
    mutations: {
        ...LearnMutations,
    },
};
