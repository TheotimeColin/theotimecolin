import tmpData from '@/data/Projects'

import { SET_PROJECTS, SET_ACTIVE_PROJECT, } from '@/store/types/mutation-types'
import { LOAD_PROJECTS } from '@/store/types/action-types'

export default {
    namespaced: true,
    state: {
        active: null,
        next: null,
        items: []
    },
    mutations: {
        [SET_PROJECTS] (state, projects) {
            state.items = projects
        },
        [SET_ACTIVE_PROJECT] (state, item) {
            state.active = item
            
            let current = 0
            state.items.forEach((project, i) => {
                if (project.id == item.id) current = i + 1
                if (current == i) state.next = project
            })
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