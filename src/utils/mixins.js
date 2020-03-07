const mixins = {
  methods: {
    /**
     * @func:
     * @desc: 判断浏览器
     * @param {type}
     * @return:
     * @author: Frank
     */
    browser () {
      let browser = window.navigator.userAgent
      if (/AlipayClient/.test(browser)) {
        // console.log('0:支付宝app的浏览器')
        return 0
      } else if (/MicroMessenger/.test(browser)) {
        // console.log('1:微信app的浏览器')
        return 1
      } else {
        // console.log('2:其它浏览器')
        return 2
      }
    }
  }
}
export default mixins
