import axios from '../request/http'
export default function wxshare (param) {
  let url = param.url
  axios.wx(`Sougroup/Public/getJsSdkByUrl`, {
    url
  })
    .then((response) => {
      // console.log(response.data)
      wx.config({
        debug: false,
        appId: response.data.appId, // 必填，公众号的唯一标识
        timestamp: response.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: response.data.nonceStr, // 必填，生成签名的随机串
        signature: response.data.signature, // 必填，签名
        jsApiList: [ // 必填，需要使用的JS接口列表
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'hideAllNonBaseMenuItem'
        ]
      })
      wx.ready(function () {
        // 分享给朋友
        wx.onMenuShareAppMessage({
          title: param.title, // 分享标题
          desc: param.desc, // 分享描述
          link: param.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: param.imgUrl, // 分享图标
          success: function (res) {
            // 设置成功
            console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title: param.title, // 分享标题
          link: param.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: param.imgUrl, // 分享图标
          success: function (res) {
            // 设置成功
            console.log('分享到朋友圈成功返回的信息为:', res)
          }
        })
        if (process.env.VUE_APP_SHARE === '0') {
          // 隐藏所有非基础按钮接口
          wx.hideAllNonBaseMenuItem()
        }
      })
      wx.error(function (res) {
        console.log('验证失败返回的信息:', res)
      })
    })
    .catch((response) => {
      console.log(response.data)
    })
}
