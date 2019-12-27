const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManage {
  static initCore(app){
    InitManage.app = app
    InitManage.initRequireRou()
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
}
module.exports = InitManage
