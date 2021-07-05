import Vue from 'vue'
import api from './api'
import App from './App.vue'
import store from './store'
import Error from './utils/error'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Toast } from 'vant'
import 'lib-flexible/flexible.js'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})

router.beforeEach((to, from, next) => {
  if (to && to.meta && to.meta.title) {
    if (document.title !== to.meta.title) {
      document.title = to.meta.title
    }
  }
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(Error)
Vue.use(Toast)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
