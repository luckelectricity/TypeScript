const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManage {
  static initCore(app){
    InitManage.app = app
    InitManage.initRequireRou()
    InitManage.InitConfig()
  }
  static initRequireRou(){
    requireDirectory(module, `${process.cwd()}/app/api`, {
      visit: whenLoadModule
    })

    function whenLoadModule(rou) {
      if (rou instanceof Router) {
        InitManage.app.use(rou.routes())
      }
    }
  }

  static InitConfig(){
    const configPath = `${process.cwd()}/config/config`
    const config = require(configPath)
    global.config = config
  }
}
module.exports = InitManage
