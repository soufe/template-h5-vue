import qs from 'qs'
import axios from 'axios'
import store from '../store'
import { Toast } from 'vant'

const instance = axios.create({
  timeout: 12000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

const errorHandle = (status: number, other: string): void => {
  switch (status) {
    case 404:
      Toast('服务器开小差了...')
      break
    default:
      Toast(other)
  }
}

instance.interceptors.request.use(
  config => {
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      Toast('网络异常')
    }
  }
)

let baseEnv = ''
const FLAG: string = process.env.VUE_APP_FLAG
switch (FLAG) {
  case '0':
    baseEnv = '/apizsm/'
    break
  case '1':
    baseEnv = '/apisou/'
    break
  case '2':
    baseEnv = '/apibc/'
    break
  default:
    baseEnv = ''
}

const baseParams: any = { client_type: 'h5' }

function get (url: string, params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    instance
      .get(baseEnv + url, {
        params: Object.assign(baseParams, params)
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

function post (url: string, params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    instance
      .post(baseEnv + url, qs.stringify(Object.assign(baseParams, params)))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

function wx (url: string, params: any): Promise<any> {
  return new Promise((resolve, reject) => {
    instance
      .post(`/apizsm/${url}`, qs.stringify(Object.assign(baseParams, params)))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export default {
  get,
  post,
  wx
}
