import axios from '../request/http'
export default function wxshare (
  authUrl,
  device,
  allowShare,
  shareTitle,
  shareDesc,
  shareImg
) {
  const shareConfig = {
    title: shareTitle,
    desc: shareDesc,
    link: allowShare ? authUrl : window.location.origin,
    imgUrl: process.env.VUE_APP_OSS + shareImg
  }
  axios
    .wx(`Sougroup/Public/getJsSdkByUrl`, {
      type: 1,
      url: encodeURIComponent(device === 'ios' ? window.entryUrl : authUrl)
    })
    .then(response => {
      // console.log(response.data)
      wx.config({
        debug: false,
        appId: response.data.appId, // 必填，公众号的唯一标识
        timestamp: response.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: response.data.nonceStr, // 必填，生成签名的随机串
        signature: response.data.signature, // 必填，签名
        jsApiList: [
          // 必填，需要使用的JS接口列表
          'checkJsApi',
          'hideAllNonBaseMenuItem',
          'updateTimelineShareData',
          'updateAppMessageShareData'
        ]
      })
      wx.ready(function () {
        // 分享给朋友
        wx.updateAppMessageShareData({
          title: shareConfig.title, // 分享标题
          desc: shareConfig.desc, // 分享描述
          link: shareConfig.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareConfig.imgUrl, // 分享图标
          success: function (res) {
            // 设置成功
            console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        // 分享到朋友圈
        wx.updateTimelineShareData({
          title: shareConfig.title, // 分享标题
          link: shareConfig.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareConfig.imgUrl, // 分享图标
          success: function (res) {
            // 设置成功
            console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        if (!allowShare) {
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
