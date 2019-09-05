import Vue from 'vue'
import Vuex from 'vuex'

import global from '@/store/modules/global'
import sliderAnimation from '@/store/modules/sliderAnimation'
import projects from '@/store/modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		global,
		sliderAnimation,
		projects
	}
})