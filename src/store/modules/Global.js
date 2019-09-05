import { SET_LOADED, SET_VISIBLE } from '@/store/types/mutation-types'

export default {
    namespaced: true,
    state: {
        loaded: false,
        loadedVisible: false
    },
    mutations: {
        [SET_LOADED] (state, value) {
            state.loaded = value
        },
        [SET_VISIBLE] (state, value) {
            state.loadedVisible = value
        }
    },
    actions: {}
}