/**
 * @desc: demo模块接口列表
 * @param {type}
 * @return:
 * @author: Frank
 */
import axios from '../utils/http'

const Demo = {
  get (id: number, params: object) {
    return axios.get(`some/${id}`, {
      params
    })
  },
  post (id: number, params: object) {
    return axios.post('Soustore/AppletStore/get_index_type', params)
  }
}

export default Demo
