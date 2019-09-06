import { SET_LOADED, SET_VISIBLE, UPDATE_BREAKPOINTS } from '@/store/types/mutation-types'

export default {
    namespaced: true,
    state: {
        loaded: false,
        loadedVisible: false,
        window: {
            s: false,
            m: false,
            l: false
        }
    },
    mutations: {
        [UPDATE_BREAKPOINTS] (state, value) {
            console.log(value)
            state.window = {
                ...state.window,
                ...value
            }
        },
        [SET_LOADED] (state, value) {
            state.loaded = value
        },
        [SET_VISIBLE] (state, value) {
            state.loadedVisible = value
        }
    },
    actions: {}
}