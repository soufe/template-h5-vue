<template>
  <h1
    :style="{
      color: '#333',
      fontSize: '16px',
      textAlign: 'center',
      margin: '20px 0',
    }"
  >
    sfe tmpl-h5-vue
  </h1>
</template>

<script>
import share from 'utils/wxshare.js'
export default {
  name: 'Index',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    /**
     * @func:
     * @desc: 微信分享
     * @param {type}
     * @return:
     * @author: Frank
     */
    this.getUrl()
      .then((value) => {
        this.wxConfig()
      })
      .catch((Error) => {
        console.log(Error)
      })
  },
  destroyed () {},
  methods: {
    /**
     * @func:
     * @desc: 微信分享
     * @param {type}
     * @return:
     * @author: Frank
     */
    getUrl () {
      return new Promise((resolve, reject) => {
        const fullPath = `https://web.sousoushenbian.cn${
          process.env.BASE_URL
        }${this.$route.fullPath.split('#')[0].substr(1)}`
        if (fullPath) {
          this.$store.commit({
            type: 'ENTRY_URL',
            fullPath
          })
          resolve(fullPath)
        } else {
          reject(Error)
        }
      })
    },
    wxConfig () {
      share({
        hide: true,
        title: '嗖嗖身边',
        desc: '嗖嗖身边',
        imgUrl: `${process.env.VUE_APP_OSS}h5/wx-share/logo.png`
      })
    }
  }
}
</script>

<style scoped lang="less"></style>
