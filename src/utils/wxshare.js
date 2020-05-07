import wx from 'soufe-jssdk'
import axios from '../request/http'
import store from '../store'
import client from 'utils/client'
export default function wxshare (param) {
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
      wx.config({
        debug: false,
        appId: response.data.appId,
        timestamp: response.data.timestamp,
        nonceStr: response.data.nonceStr,
        signature: response.data.signature,
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
          success: function (res) {
            // console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        // 分享到朋友圈
        wx.updateTimelineShareData({
          title: title,
          link: authUrl,
          imgUrl: imgUrl,
          success: function (res) {
            // console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        if (hide) {
          // 隐藏所有非基础按钮接口
          wx.hideAllNonBaseMenuItem()
        }
      })
      wx.error(function (res) {
        console.log('验证失败返回的信息:', res)
      })
    })
    .catch(response => {
      console.log(response.data)
    })
}
