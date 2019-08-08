import Vue from 'vue'
import Vuex from 'vuex'

import sliderAnimation from '@/store/modules/sliderAnimation'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
        sliderAnimation
	}
})