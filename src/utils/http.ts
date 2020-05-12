import qs from 'qs'
import axios from 'axios'
import { Toast } from 'vant'
// import store from '../store'

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
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
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

const baseEnv: string = process.env.VUE_APP_FLAG === '0' ? '/api/' : '/apis/'

const baseParams: object = { client_type: 'h5' }

function get (url: string, params: object) {
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

function post (url: string, params: object) {
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

function wx (url: string, params: object) {
  return new Promise((resolve, reject) => {
    instance
      .post(`/api/${url}`, qs.stringify(Object.assign(baseParams, params)))
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
