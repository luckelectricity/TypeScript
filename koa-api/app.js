const Koa = require('koa')
const InitManage = require('./core/init')
const app = new Koa()

InitManage.initCore(app)

app.listen(3000, () => {
  console.log('3000')
})
