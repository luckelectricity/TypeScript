import axios from 'axios'
// import config from './config.js'
import { Loading, Message } from 'element-ui'
import { getStorage } from './storage'
import { Base64 } from 'js-base64'

/* 请求合并只出现一次loading */
let needLoadingRequestCount = 0
let toast = null

function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    /* loading加载 */
    loading('start')
  }
  needLoadingRequestCount++
}

function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    /* 300ms 间隔内的 loading 合并为一次 */
    setTimeout(tryCloseLoading, 300)
  }
}
const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    /* loading结束 */
    loading('end')
  }
}

/* loading加载 */
function loading (str) {
  if (str === 'start') {
    toast = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  } else if (str === 'end') {
    toast && toast.close()
  }
}

/* 请求拦截 */
axios.interceptors.request.use(
  config => {
    const token = getStorage('token') || ''
    config.baseURL = ''
    config.timeout = 5000
    if (config.showLoading) {
      showFullScreenLoading()
    }
    if (token) {
      config.headers['Authorization'] = 'Basic ' + Base64.encode(token)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/* 请求响应拦截 */
axios.interceptors.response.use(
  response => {
    if (response.config.showLoading) {
      tryHideFullScreenLoading()
    }
    return response
  },
  error => {
    let msg = error.response.data.msg
    let message = error.message
    if (Array.isArray(msg)) {
      message = msg[0]
    } else {
      message = msg
    }
    Message({
      message: message, // 错误信息
      type: 'error',
      onClose: () => {
        if (error.config.showLoading) {
          tryHideFullScreenLoading() // 消除loading
        }
      }
    })
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, data, config = { showLoading: true }) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: data }, config)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}, config = { showLoading: true }) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, config)
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export default function http (url, data = {}, config = { showLoading: true }) {
  if (config.showLoading === undefined) {
    config.showLoading = true
  }
  if (config.method && config.method.toLowerCase() === 'get') {
    return get(url, data, config)
  }
  return post(url, data, config)
}
