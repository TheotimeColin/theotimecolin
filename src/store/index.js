import Vue from 'vue'
import Vuex from 'vuex'

import sliderAnimation from '@/store/modules/sliderAnimation'
import projects from '@/store/modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		sliderAnimation,
		projects
	}
})