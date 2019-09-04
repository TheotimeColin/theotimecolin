import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import Project from '@/pages/Project'
import About from '@/pages/About'

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
        position: 'left',
        centerDelay: 500
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        position: 'center'
      }
    }
  ]
})
