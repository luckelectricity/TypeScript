import util from 'util'
import axios from 'axios'
class WXManager {
  static async codeToToken(code){
    let url = util.format(
      global.config.wx.loginWxUrl,
      global.config.wx.appSecret,
      global.config.wx.appId,
      code
      )
    axios.get(url).then(res => {
      if(res.status !== 200){
        throw new global.errs.AuthFailed('openid获取失败')
      }
      let data = res.data
      if(data.errcode !== 0){
        throw new global.errs.AuthFailed(data.errmsg)
      }
    })
  }
}