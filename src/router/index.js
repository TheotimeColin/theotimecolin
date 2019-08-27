import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Project from '@/pages/Project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Homepage',
      component: Homepage,
      meta: {
        position: 'right'
      }
    },
    {
      path: '/project/:id',
      name: 'Project',
      component: Project,
      meta: {
        position: 'left'
      }
    }
  ]
})
