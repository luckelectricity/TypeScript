import axios from 'axios'
// import config from './config.js'
import { Toast } from 'cube-ui'
import { getStorage } from './storage'

/* 请求合并只出现一次loading */
let needLoadingRequestCount = 0
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
  let toast = Toast.$create({
    /* 滴滴弹框 */
    txt: 'loading...',
    mask: true,
    time: 0
  })
  if (str === 'start') {
    toast.show()
  } else if (str === 'end') {
    toast.hide()
  }
}

/* 请求拦截 */
axios.interceptors.request.use(
  config => {
    const token = getStorage('token')
    const base64 = 'Basic ' + window.btoa(token + ':')
    config.baseURL = ''
    config.timeout = 5000
    if (config.showLoading) {
      showFullScreenLoading()
    }
    config.headers['Authorization'] = base64
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/* 请求响应拦截 */
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (response.config.showLoading && res.code === 200) {
      tryHideFullScreenLoading()
    }
    if (res.code === 403) {
      window.location = '/login'
    }
    if (res.code !== 200) {
      Toast.$create({
        txt: res.msg, // 错误信息
        type: 'error',
        time: 2000,
        onTimeout: () => {
          if (response.config.showLoading) {
            tryHideFullScreenLoading() // 消除loading
          }
        }
      }).show()
    }
    return res
  },
  error => {
    Toast.$create({
      txt: error.message, // 错误信息
      type: 'error',
      time: 2000,
      onTimeout: () => {
        if (error.config.showLoading) {
          tryHideFullScreenLoading() // 消除loading
        }
      }
    }).show()
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
      .then(res => {
        resolve(res)
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
      .then(res => {
        resolve(res)
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
