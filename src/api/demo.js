/**
 * @func:
 * @desc: demo模块接口列表
 * @param {type}
 * @return:
 * @author: Frank
 */
import axios from 'request/http'

const demo = {
  demoGet1 () {
    return axios.get('some')
  },
  demoGet2 (id, params) {
    return axios.get(`some/${id}`, {
      params: params
    })
  },
  demoPost (params) {
    return axios.post(`Sougive/Index/give_banner_list`, params)
  }
}

export default demo
