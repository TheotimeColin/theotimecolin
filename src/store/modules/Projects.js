import tmpData from '@/data/Projects'

import { SET_PROJECTS, SET_ACTIVE_PROJECT } from '@/store/types/mutation-types'
import { LOAD_PROJECTS } from '@/store/types/action-types'

export default {
    namespaced: true,
    state: {
        active: null,
        items: []
    },
    mutations: {
        [SET_PROJECTS] (state, projects) {
            state.items = projects
        },
        [SET_ACTIVE_PROJECT] (state, slug) {
            state.active = state.items.filter(item => item.slug == slug)[0]
        }
    },
    actions: {
        async [LOAD_PROJECTS] ({ state, commit }) {
            try {
                commit(SET_PROJECTS, tmpData)
            } catch (e) {
                console.error(e)
            }
        }
    }
}