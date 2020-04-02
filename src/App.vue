<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import mixins from 'utils/mixins.js'
export default {
  name: 'App',
  mixins: [mixins],
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.axiosDemo()
  },
  destroyed () {},
  methods: {
    /**
     * @func:
     * @desc: 请求接口
     * @param {type}
     * @return:
     * @author: Frank
     */
    axiosDemo () {
      this.$api.demo
        .demoPost({
          http_request_type: 1,
          fans_token: '13143jb8stl3ou686qhvv40h2vjdcf3'
        })
        .then(response => {
          console.log(response.data)
        })
        .catch(response => {
          console.log(response.data)
        })
    },
    /**
     * @func:
     * @desc: 支付宝分享
     * @param {type}
     * @return:
     * @author: Frank
     */
    apShareConfig () {
      function ready (callback) {
        if (window.AlipayJSBridge) {
          callback && callback()
        } else {
          document.addEventListener('AlipayJSBridgeReady', callback, false)
        }
      }
      ready(function () {
        AlipayJSBridge.call('hideToolbar')
        AlipayJSBridge.call('hideOptionMenu')
      })
    },
    /**
     * @func:
     * @desc: 小程序分享
     * @param {type}
     * @return:
     * @author: Frank
     */
    mpShareConfig () {
      wx.miniProgram.getEnv(function (res) {
        if (res.miniprogram) {
          wx.miniProgram.postMessage({
            data: {
              shareTitle: '分享标题',
              shareImage: process.env.VUE_APP_OSS + 'h5/wx-share/logo.png'
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
* {
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
  vertical-align: baseline;
}
img {
  border: 0 none;
  vertical-align: top;
}
i,
em {
  font-style: normal;
}
ol,
ul {
  list-style: none;
}
input,
select,
button,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-family: inherit;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: #666;
}
body {
  margin: 0 auto;
  height: 100%;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  color: #666;
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
}
input[type="text"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

#nprogress .bar {
  background: #ff8903 !important;
}
</style>
