/**
 * purpose: 操作Storage
 * path: src/utils/storage.js
 */

/**
 * 存储Storage
 * @param {String} key input value Storage的键名
 * @param {String} content input value Storage的键值
 * @param {String} type input value Storage的类型
 */
export const setStorage = (key, content, type = 'sessionStorage') => {
  if (!key) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  if (window[type]) {
    window[type].setItem(key, content)
  }
}

/**
 * 获取Storage
 * @param {String} key input value Storage的键名
 * @param {String} type input value Storage的类型
 * @returns {Object} output value Storage的键值
 */
export const getStorage = (key, type = 'sessionStorage') => {
  if (!key) return
  let content = window[type] ? window[type].getItem(key) : ''
  if (content || content !== 'undefined') {
    try {
      content = JSON.parse(content)
    } catch (e) {
      content = window[type] ? window[type].getItem(key) : ''
    }
  }

  return (content && content !== 'undefined' && '') || content
}

/**
 * 清除某个Storage
 * @param {String} key input value Storage的键名
 * @param {String} type input value Storage的类型
 */
export const removeStorage = (key, type = 'sessionStorage') => {
  if (!key) return
  if (window[type]) {
    window[type].removeItem(key)
  }
}

/**
 * 清除所有Storage
 * @param {String} type input value Storage的类型
 */
export const clearStorage = (type = 'sessionStorage') => {
  if (window[type]) {
    window[type].clear()
  }
}
