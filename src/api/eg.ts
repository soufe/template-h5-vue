/**
 * @desc: eg模块接口列表
 * @param {type}
 * @return:
 * @author: Frank
 */
import axios from '../utils/http'

const Eg = {
  get (id: number, params: any): Promise<any> {
    return axios.get(`some/${id}`, {
      params
    })
  },
  post (id: number, params: any): Promise<any> {
    return axios.post('Soustore/AppletStore/get_index_type', params)
  }
}

export default Eg
