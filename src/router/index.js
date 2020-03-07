import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/Index'
// const Index = () => import('views/Index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/index', meta: { title: '嗖嗖身边' } },
    { path: '/index', component: Index, meta: { title: '嗖嗖身边' } },
    { path: '*', redirect: '/index' }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
