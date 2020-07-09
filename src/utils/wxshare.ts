import wx from '@sousoufe/jssdk'
import axios from './http'
import store from '../store'
import client from './client'
export default function wxshare (param: any) {
  const { isIos } = client().system
  const { hide, title, desc, imgUrl } = param
  const { entryUrl } = store.state
  const authUrl = window.location.href
  axios
    .wx('Sougroup/Public/getJsSdkByUrl', {
      type: 1,
      url: encodeURIComponent(isIos ? entryUrl : authUrl)
    })
    .then(response => {
      // console.log(response.data)
      const _response: any = response
      wx.config({
        debug: false,
        appId: _response.data.appId,
        timestamp: _response.data.timestamp,
        nonceStr: _response.data.nonceStr,
        signature: _response.data.signature,
        jsApiList: [
          'checkJsApi',
          'hideAllNonBaseMenuItem',
          'updateTimelineShareData',
          'updateAppMessageShareData'
        ]
      })
      wx.ready(function () {
        // 分享给朋友
        wx.updateAppMessageShareData({
          title: title,
          desc: desc,
          link: authUrl,
          imgUrl: imgUrl,
          success: function (res: any) {
            console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        // 分享到朋友圈
        wx.updateTimelineShareData({
          title: title,
          link: authUrl,
          imgUrl: imgUrl,
          success: function (res: any) {
            console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        if (hide) {
          // 隐藏所有非基础按钮接口
          wx.hideAllNonBaseMenuItem()
        }
      })
      wx.error(function (res: any) {
        console.log('验证失败返回的信息:', res)
      })
    })
    .catch(response => {
      console.log(response.data)
    })
}
