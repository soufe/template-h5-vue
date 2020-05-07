/**
 * axios封装 请求拦截、响应拦截、错误统一处理
 */

import qs from 'qs'
import axios from 'axios'
import { Toast } from 'vant'
// import store from '../store'

/**
 * 提示信息
 */

const tip = msg => {
  // console.log(msg)
  Toast(msg)
}

/**
 * 错误统一处理
 */

const errorHandle = (status, other) => {
  switch (status) {
    case 404:
      tip('服务器开小差了...')
      break
    default:
      // console.log(other)
      tip(other)
  }
}

/**
 * 创建axios实例
 */

const instance = axios.create({
  timeout: 12000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // const token = store.state.token
    // token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error))

// 添加响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // store.commit('changeNetwork', false)
    }
  })

/**
 * 当前环境
 */

const baseEnv = process.env.VUE_APP_FLAG === '0' ? process.env.VUE_APP_URL_FEN : process.env.VUE_APP_URL_SOU

/**
 * 公共参数
 */
const HTTP_REQUEST_TYPE = 1
const publicParams = { http_request_type: HTTP_REQUEST_TYPE }

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

function get (url, params) {
  return new Promise((resolve, reject) => {
    instance.get(baseEnv + url, {
      params: Object.assign(publicParams, params)
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

function post (url, params) {
  return new Promise((resolve, reject) => {
    // console.log(baseEnv + url)
    instance.post((process.env.VUE_APP_FLAG === '0' ? '/api/' : '/apis/') + url, qs.stringify(Object.assign(params, publicParams)))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

function wx (url, params) {
  return new Promise((resolve, reject) => {
    // console.log(baseEnv + url)
    instance.post('/api/' + url, qs.stringify(Object.assign(params, publicParams)))
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
  wx,
  instance
}
