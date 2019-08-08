import Vue from 'vue'
import Vuex from 'vuex'

import animation from '@/store/modules/animation'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
        animation
	}
})