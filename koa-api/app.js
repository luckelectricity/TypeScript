const Koa = require('koa')
const InitManage = require('./core/init')
const parser = require('koa-bodyparser')
const app = new Koa()

InitManage.initCore(app)
app.use(parser())
app.listen(3000, () => {
  console.log('3000')
})
