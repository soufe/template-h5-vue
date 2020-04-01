import Error from './utils/error'
import Vue from 'vue'
import api from './api'
import App from './App.vue'
import store from './store'
import router from './router'
import client from 'utils/client'
import wxshare from 'utils/wxshare'
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
  if (document.title !== to.meta.title) {
    document.title = to.meta.title
  }
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
  let device = client()
  if (device.system.isWx) {
    // ios 路由 => this.$router.push({ path: '/index', query: { a: 1, b: 2 } })
    // android 路由 => window.location.href = 'https://web.sousoushenbian.cn/h5-template/index?a=1&b=2'
    let authUrl =
      `${window.location.origin}` +
      process.env.BASE_URL +
      `${to.fullPath.toString().substr(1)}`
    let { allowShare, shareTitle, shareDesc, shareImgUrl } = to.meta
    if (device.system.isIos) {
      if (window.entryUrl === '' || window.entryUrl === undefined) {
        window.entryUrl = authUrl
      }
      wxshare(authUrl, 'ios', allowShare, shareTitle, shareDesc, shareImgUrl)
    } else {
      setTimeout(function () {
        wxshare(
          authUrl,
          'android',
          allowShare,
          shareTitle,
          shareDesc,
          shareImgUrl
        )
      }, 500)
    }
  }
})

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.use(Error).use(Toast)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
