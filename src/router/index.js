import Vue from 'vue'
import Router from 'vue-router'
import Index from 'views/Index'
// const Index = () => import('views/Index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',
      meta: {
        title: '嗖嗖身边',
        allowShare: false,
        shareTitle: '',
        shareDesc: '',
        shareImgUrl: ''
      }
    },
    {
      path: '/index',
      component: Index,
      meta: {
        title: '嗖嗖身边',
        allowShare: true, // 是否开启分享
        shareTitle: '分享标题',
        shareDesc: '分享描述',
        shareImgUrl: 'h5/wx-share/logo.png'
      }
    },
    {
      path: '*',
      redirect: '/index',
      meta: {
        title: '嗖嗖身边',
        allowShare: false,
        shareTitle: '',
        shareDesc: '',
        shareImgUrl: ''
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
