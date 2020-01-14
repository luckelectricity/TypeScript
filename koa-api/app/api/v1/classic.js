const Router = require('koa-router')
const { ValidationInteger } = require('../../validators/validator')
const { Auth } = require('../../../middlewares/auth')
const router = new Router({
  prefix: '/v1/classic'
})

router.get('/latest', new Auth(8).m, async (ctx) => {
    ctx.body = {
      code: 200,
      data: ctx.auth,
      msg: 'success'
    }
  })

module.exports = router
